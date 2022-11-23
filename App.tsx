import { useEffect, useState } from 'react';

import Graph from 'graphology';
import { Attributes } from 'graphology-types';
import '@react-sigma/core/lib/react-sigma.min.css';
import { SigmaContainer, useSigma, useLoadGraph } from '@react-sigma/core';
import { useWorkerLayoutForceAtlas2 } from '@react-sigma/layout-forceatlas2';

import { useSeedRandom } from './useSeedRandom';
import { GraphDefault } from './GraphDefault';
import { Settings } from 'sigma/settings';
import React = require('react');
export const defaultGraphConfig: Partial<Settings> = {
  renderEdgeLabels: true,
  defaultEdgeType: 'arrow',
  labelWeight: 'bold',
  edgeLabelWeight: 'bold',
  edgeLabelSize: 10,
  labelSize: 12,
};
export const LayoutFA2: React.FC = () => {
  const Fa2: React.FC = () => {
    const { start, kill, isRunning } = useWorkerLayoutForceAtlas2({
      settings: { slowDown: 10 },
    });

    useEffect(() => {
      // start FA2
      start();
      return () => {
        // Kill FA2 on unmount
        kill();
      };
    }, [start, kill]);

    return null;
  };

  return (
    <SigmaContainer style={{ height: '500px' }} settings={defaultGraphConfig}>
      <GraphDefault order={100} probability={0.1} />
      <Fa2 />
    </SigmaContainer>
  );
};

export default LayoutFA2;
