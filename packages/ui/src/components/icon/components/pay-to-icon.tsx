import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function PayToIcon({
  look = 'filled',
  'aria-label': ariaLabel = 'Pay To',
  copyrightYear = '2023',
  ...props
}: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      {look === 'filled' ? (
        <g id="Size=Md-24px, Style=Filled">
          <path
            id="pay-to"
            d="M18.5761 0H5.42394C3.9858 0.00123817 2.60692 0.573085 1.59 1.59C0.573085 2.60692 0.00123817 3.9858 0 5.42394V18.5807C0 20.0193 0.571449 21.3989 1.58864 22.416C2.60582 23.4332 3.98542 24.0047 5.42394 24.0047H18.5761C20.0146 24.0047 21.3942 23.4332 22.4114 22.416C23.4285 21.3989 24 20.0193 24 18.5807V5.42862C24.0006 4.71594 23.8608 4.01013 23.5885 3.35153C23.3162 2.69293 22.9167 2.09444 22.413 1.59029C21.9093 1.08613 21.3112 0.686191 20.6528 0.41332C19.9944 0.140449 19.2887 -2.64817e-07 18.5761 0ZM13.9517 17.9158C13.3451 17.9245 12.7428 17.8125 12.1799 17.5864C11.617 17.3603 11.1046 17.0245 10.6726 16.5986C10.2406 16.1727 9.89753 15.6652 9.66337 15.1056C9.42922 14.5459 9.30864 13.9453 9.30864 13.3387C9.30864 12.732 9.42922 12.1314 9.66337 11.5718C9.89753 11.0122 10.2406 10.5047 10.6726 10.0788C11.1046 9.65288 11.617 9.31711 12.1799 9.09098C12.7428 8.86485 13.3451 8.75286 13.9517 8.76153H19.1156V7.33915L21.7706 9.54894L19.111 11.7615V10.3092H13.8853C12.2852 10.3092 10.962 11.7391 10.962 13.3382C10.9445 13.7417 11.0089 14.1446 11.1512 14.5226C11.2936 14.9005 11.511 15.2458 11.7903 15.5375C12.0697 15.8292 12.4052 16.0613 12.7766 16.2199C13.1481 16.3785 13.5478 16.4603 13.9517 16.4603C14.3556 16.4603 14.7553 16.3785 15.1267 16.2199C15.4982 16.0613 15.8337 15.8292 16.113 15.5375C16.3924 15.2458 16.6098 14.9005 16.7521 14.5226C16.8945 14.1446 16.9589 13.7417 16.9414 13.3382C16.9327 12.6562 16.7289 11.991 16.3541 11.4211H18.1085C18.3852 12.0224 18.5287 12.6763 18.5293 13.3382C18.5345 13.9408 18.4197 14.5384 18.1915 15.0962C17.9633 15.6539 17.6263 16.1606 17.2002 16.5868C16.7741 17.0129 16.2674 17.3499 15.7096 17.5781C15.1519 17.8062 14.5543 17.9211 13.9517 17.9158ZM7.59258 16.3261C7.95868 16.308 8.3204 16.2384 8.66708 16.1194V17.6923C8.32503 17.8303 7.96124 17.9066 7.59258 17.9177C6.83494 17.9115 6.11066 17.6051 5.5786 17.0657C5.04654 16.5263 4.75013 15.7979 4.75436 15.0402V10.3092H2.9654V8.76153H4.75623V6.79769H6.30954V8.76153H10.5486C9.94358 9.17639 9.42204 9.70143 9.01122 10.3092H6.30954V15.0383C6.31174 15.3785 6.44779 15.7042 6.68826 15.9448C6.92872 16.1854 7.25427 16.3217 7.59445 16.3242L7.59258 16.3261Z"
            fill="currentColor"
          />
        </g>
      ) : (
        <g id="Size=Md-24px, Style=Outlined">
          <path
            id="pay-to"
            d="M18.5761 0H5.42394C3.9858 0.00123817 2.60692 0.573085 1.59 1.59C0.573085 2.60692 0.00123817 3.9858 0 5.42394V18.5807C0 20.0193 0.571449 21.3989 1.58864 22.416C2.60582 23.4332 3.98542 24.0047 5.42394 24.0047H18.5761C20.0146 24.0047 21.3942 23.4332 22.4114 22.416C23.4285 21.3989 24 20.0193 24 18.5807V5.42862C24.0006 4.71594 23.8608 4.01013 23.5885 3.35153C23.3162 2.69293 22.9167 2.09444 22.413 1.59029C21.9093 1.08613 21.3112 0.686191 20.6528 0.41332C19.9944 0.140449 19.2887 -2.64817e-07 18.5761 0ZM13.9517 17.9158C13.3451 17.9245 12.7428 17.8125 12.1799 17.5864C11.617 17.3603 11.1046 17.0245 10.6726 16.5986C10.2406 16.1727 9.89753 15.6652 9.66337 15.1056C9.42922 14.5459 9.30864 13.9453 9.30864 13.3387C9.30864 12.732 9.42922 12.1314 9.66337 11.5718C9.89753 11.0122 10.2406 10.5047 10.6726 10.0788C11.1046 9.65288 11.617 9.31711 12.1799 9.09098C12.7428 8.86485 13.3451 8.75286 13.9517 8.76153H19.1156V7.33915L21.7706 9.54894L19.111 11.7615V10.3092H13.8853C12.2852 10.3092 10.962 11.7391 10.962 13.3382C10.9445 13.7417 11.0089 14.1446 11.1512 14.5226C11.2936 14.9005 11.511 15.2458 11.7903 15.5375C12.0697 15.8292 12.4052 16.0613 12.7766 16.2199C13.1481 16.3785 13.5478 16.4603 13.9517 16.4603C14.3556 16.4603 14.7553 16.3785 15.1267 16.2199C15.4982 16.0613 15.8337 15.8292 16.113 15.5375C16.3924 15.2458 16.6098 14.9005 16.7521 14.5226C16.8945 14.1446 16.9589 13.7417 16.9414 13.3382C16.9327 12.6562 16.7289 11.991 16.3541 11.4211H18.1085C18.3852 12.0224 18.5287 12.6763 18.5293 13.3382C18.5345 13.9408 18.4197 14.5384 18.1915 15.0962C17.9633 15.6539 17.6263 16.1606 17.2002 16.5868C16.7741 17.0129 16.2674 17.3499 15.7096 17.5781C15.1519 17.8062 14.5543 17.9211 13.9517 17.9158ZM7.59258 16.3261C7.95868 16.308 8.3204 16.2384 8.66708 16.1194V17.6923C8.32503 17.8303 7.96124 17.9066 7.59258 17.9177C6.83494 17.9115 6.11066 17.6051 5.5786 17.0657C5.04654 16.5263 4.75013 15.7979 4.75436 15.0402V10.3092H2.9654V8.76153H4.75623V6.79769H6.30954V8.76153H10.5486C9.94358 9.17639 9.42204 9.70143 9.01122 10.3092H6.30954V15.0383C6.31174 15.3785 6.44779 15.7042 6.68826 15.9448C6.92872 16.1854 7.25427 16.3217 7.59445 16.3242L7.59258 16.3261Z"
            fill="currentColor"
          />
        </g>
      )}
    </Icon>
  );
}