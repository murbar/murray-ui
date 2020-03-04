import React from 'react';
import styled from 'styled-components';
import Timeline from 'components/Timeline';

const Styles = styled.div``;

export default function Preview() {
  return (
    <Styles>
      <Timeline
        vertical
        items={[
          {
            label: '2010',
            events: [
              'Dan & Pete co-found Optimizely',
              'Optimizely graduates from YCombinator'
            ]
          },
          {
            label: '2013',
            events: [
              'Raised $28 million in Series A led by Benchmark',
              'Opened 1st international office in Amsterdam',
              'Moved to new San Francisco HQ'
            ]
          },

          {
            label: '2014',
            events: [
              'Raised $57 million in Series B led by Andreessen Horowitz',
              'Named the #1 "Best Place to Work" by SF Business Times"',
              'Launched Mobile Optimization'
            ]
          },

          {
            label: '2015',
            events: [
              'Raised $58 million in Series C led by Index Ventures',

              'SF Business Times "Best Places to Work"'
            ]
          }
        ]}
      />
    </Styles>
  );
}
