import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccessRequestModalComponent } from '@modals/access-request-modal/access-request-modal.component';
import { AuthService, OverlayService } from '@shared/services';
import { UserStore } from '@store/user';
import { WorkoutsStore, WorkoutsRepository } from '@store/workouts';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weekly-plan',
  templateUrl: './weekly-plan.component.html',
  styleUrls: ['./weekly-plan.component.scss'],
})
export class WeeklyPlanComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private isLoggedIn = false;

  constructor(
    public authService: AuthService,
    public userStore: UserStore,
    public workoutStore: WorkoutsStore,
    private workoutRepository: WorkoutsRepository,
    private overlayService: OverlayService
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
    this.workoutRepository.create({
      title: 'Test',
      desc: 'Test',
      currentMembers: 0,
      date: new Date(),
      difficulty: 'easy',
      duration: 60000,
      visible: false,
      totalMembers: 10,
    });
  }

  openPopover() {
    if (this.isLoggedIn) {
      console.log('OOP');
    } else {
      this.overlayService.open(AccessRequestModalComponent, null);
    }
  }

  deleteWorkout(id: string) {
    this.workoutRepository.delete(id);
  }

  changeWorkoutVisibility(id: string, visible: boolean) {
    this.workoutRepository.update(id, { visible: visible });
  }
}
