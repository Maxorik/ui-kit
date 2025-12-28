import Dots from './svg-lib/3-dots-horizontal-svgrepo-com.svg?react';
import About from './svg-lib/about-empty-page-svgrepo-com.svg?react';
import Alert from './svg-lib/alert-square.svg?react';
import ArrowDown from './svg-lib/arrow-bottom-svgrepo-com.svg?react';
import ArrowLeft from './svg-lib/arrow-left-svgrepo-com.svg?react';
import ArrowRight from './svg-lib/arrow-right-svgrepo-com.svg?react';
import ArrowUp from './svg-lib/arrow-top-svgrepo-com.svg?react';
import CheckMark from './svg-lib/checkmark-svgrepo-com.svg?react';
import Clock from './svg-lib/clock-svgrepo-com.svg?react';
import Cross from './svg-lib/cross-svgrepo-com.svg?react';
import Download from './svg-lib/download-svgrepo-com.svg?react';
import Edit from './svg-lib/edit-pen-svgrepo-com.svg?react';
import Favorite from './svg-lib/favorite-svgrepo-com.svg?react';
import Forbiden from './svg-lib/forbiden-svgrepo-com.svg?react';
import RoundClose from './svg-lib/input-svgrepo-com.svg?react';
import Link from './svg-lib/link-svgrepo-com.svg?react';
import Next from './svg-lib/next-long-arrow-right-svgrepo-com.svg?react';
import Notification from './svg-lib/notification-svgrepo-com.svg?react';
import Play from './svg-lib/play-button-simple-svgrepo-com.svg?react';
import Plus from './svg-lib/plus-outlined-svgrepo-com.svg?react';
import Previous from './svg-lib/previous-long-arrow-left-svgrepo-com.svg?react';
import Remove from './svg-lib/remove-svgrepo-com.svg?react';
import Search from './svg-lib/search-svgrepo-com.svg?react';
import Join from './svg-lib/session-join-svgrepo-com.svg?react';
import Leave from './svg-lib/session-leave-svgrepo-com.svg?react';
import Settings from './svg-lib/settings-svgrepo-com.svg?react';
import Share from './svg-lib/share-svgrepo-com.svg?react';
import Star from './svg-lib/star-svgrepo-com.svg?react';
import User from './svg-lib/user-svgrepo-com.svg?react';
import Required from './svg-lib/mandatory-svgrepo-com.svg?react';


import { SVGProps, FC } from "react";
type SvgIcon = FC<SVGProps<SVGSVGElement>>;

export const icons: Record<string, SvgIcon> = {
    dots: Dots,
    about: About,
    alert: Alert,
    arrowDown: ArrowDown,
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    arrowUp: ArrowUp,
    checkMark: CheckMark,
    clock: Clock,
    cross: Cross,
    roundClose: RoundClose,
    download: Download,
    edit: Edit,
    favorite: Favorite,
    forbiden: Forbiden,
    link: Link,
    next: Next,
    notification: Notification,
    play: Play,
    plus: Plus,
    previous: Previous,
    remove: Remove,
    search: Search,
    join: Join,
    leave: Leave,
    settings: Settings,
    share: Share,
    star: Star,
    user: User,
    required: Required,
};