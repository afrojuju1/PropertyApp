export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export enum BOTTOM_TABS {
  dashboard = 'dashboard',
  properties = 'properties',
  tabThree = 'tabThree',
  tabFour = 'tabFour',
  tabFive = 'tabFive',
}

export type BottomTabParamList = {
  [BOTTOM_TABS.dashboard]: undefined;
  [BOTTOM_TABS.properties]: undefined;
  [BOTTOM_TABS.tabThree]: undefined;
  [BOTTOM_TABS.tabFour]: undefined;
  [BOTTOM_TABS.tabFive]: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
