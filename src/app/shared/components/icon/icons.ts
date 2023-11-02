class Icons {
  readonly arrow_left = './assets/icons/arrow_left_2.svg';
  readonly arrow_right = './assets/icons/arrow_right_2.svg';
  readonly edit = './assets/icons/edit.svg';
  readonly delete = './assets/icons/delete.svg';
  readonly star = './assets/icons/star.svg';
  readonly calendar = './assets/icons/calendar.svg';
  readonly three_user = './assets/icons/3_user.svg';
  readonly location = './assets/icons/location.svg';
}

export const icons = new Icons();

export type Icon = keyof Icons;
