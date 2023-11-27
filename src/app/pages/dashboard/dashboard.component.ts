import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccessRequestModalComponent } from '@modals/access-request-modal/access-request-modal.component';
import {
  AuthService,
  OverlayService,
  TextDirectionService,
} from '@shared/services';
import { UserStore } from '@store/user';
import { WorkoutsStore, WorkoutsRepository } from '@store/workouts';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private isLoggedIn = false;

  constructor(
    public authService: AuthService,
    public userStore: UserStore,
    public workoutStore: WorkoutsStore,
    public textDirectionService: TextDirectionService,
    private workoutRepository: WorkoutsRepository,
    private overlayService: OverlayService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userStore.isLoggedIn$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  createWorkout() {
    this.router.navigate(['/workout/new']);
  }

  goToWorkout(workoutId: string) {
    if (this.isLoggedIn) {
      this.router.navigate(['/workout', workoutId]);
    } else {
      this.overlayService.open(AccessRequestModalComponent, null);
    }
  }

  editWorkout(workoutId: string) {
    this.router.navigate([`/workout/edit/${workoutId}`]);
  }

  deleteWorkout(id: string) {
    this.workoutRepository.delete(id);
    // TODO: Add popup "are you sure?"
  }

  changeWorkoutVisibility(id: string, visible: boolean) {
    this.workoutRepository.update(id, { visible: visible });
    // TODO: Remove and add in edit workout page
  }
}
