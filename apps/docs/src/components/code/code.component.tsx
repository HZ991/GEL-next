import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { LiveProvider } from 'react-live';
import { useOverlayTriggerState } from 'react-stately';

import { StaticCode } from '../static-code';

import * as UISystemComponents from './code.inject-components';
import { CodeProps } from './code.types';
import { LiveCode } from './components/live-code';

const LIVE_SCOPE = {
  ...UISystemComponents,
  useOverlayTriggerState,
  useState,
  useCallback,
  useMemo,
  Fragment,
  React,
};

export function Code({ children, live, showCode, className, language = 'tsx' }: CodeProps) {
  const childrenAsString = children?.toString().trim();

  if (!childrenAsString) return null;

  if (live) {
    return (
      <LiveProvider code={childrenAsString} scope={LIVE_SCOPE} language={language}>
        <LiveCode showCode={showCode} className={className} />
      </LiveProvider>
    );
  }

  return <StaticCode language="tsx" code={childrenAsString} />;
}
