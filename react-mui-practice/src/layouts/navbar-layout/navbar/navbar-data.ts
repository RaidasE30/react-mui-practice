import routes from 'navigation/routes';
import { type Breakpoint } from '@mui/material';
import LinkData from './link-data';

export const linksData: LinkData[] = [
  { link: routes.HomePage, text: 'Home' },
];

export const linksGroups = [
  {
    title: 'Presentational',
    linksData: [
      { link: routes.TypographyPage, text: 'Typography' },
      { link: routes.LayoutPage, text: 'Layout' },
      { link: routes.LinkPage, text: 'Link' },
      { link: routes.BreadcrumbsPage, text: 'Breadcrumbs' },
      { link: routes.SpeedDialPage, text: 'Speed Dial' },
      { link: routes.AvatarPage, text: 'Avatar' },
      { link: routes.RatingPage, text: 'Rating' },
      { link: routes.BadgePage, text: 'Badge' },
      { link: routes.ListPage, text: 'List' },
      { link: routes.TooltipPage, text: 'Tooltip' },
      { link: routes.TablePage, text: 'Table' },
      { link: routes.AlertPage, text: 'Alert' },
    ],
  },
  {
    title: 'Controls',
    linksData: [
      { link: routes.ButtonPage, text: 'Buttons' },
      { link: routes.TextFieldPage, text: 'Text Field' },
      { link: routes.SelectPage, text: 'Select' },
      { link: routes.SwitchPage, text: 'Switch' },
      { link: routes.RadioButtonPage, text: 'Radio Buttons' },
      { link: routes.CheckBoxPage, text: 'Checkmarks' },
      { link: routes.AutocompletePage, text: 'Autocomplete' },
    ],
  },
  {
    title: 'Wrappers',
    linksData: [
      { link: routes.CardPage, text: 'Card' },
      { link: routes.ImageListPage, text: 'Image List' },
      { link: routes.NavbarPage, text: 'Navbar' },
      { link: routes.DrawerPage, text: 'Drawer' },
    ],
  },
  {
    title: 'Stateful',
    linksData: [
      { link: routes.AccordionPage, text: 'Accordion' },
      { link: routes.BottomNavigationPage, text: 'Bottom Navigation' },
      { link: routes.ChipPage, text: 'Chip' },
    ],
  },
];

export const expandBreakpoint: Breakpoint = 'md';
