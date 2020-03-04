import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
`;

const Item = styled.div`
  min-width: 20rem;
`;

const Label = styled.div`
  border-bottom: 1px solid black;
  padding: 1.5rem 0;
  position: relative;
  line-height: 1;
  &::after {
    --size: 1rem;
    content: '';
    display: block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    position: absolute;
    bottom: calc(-0.5 * var(--size));
    left: 0;
    background-color: black;
  }
`;

const Events = styled.ul`
  margin: 0;
  padding: 1.5rem 1.5rem 0 0;
  list-style-type: none;
`;

const Event = styled.li`
  font-size: 0.85em;
  line-height: 1.2;
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Timeline({ items, vertical = false }) {
  return (
    <Styles>
      {items.map((item, idx) => (
        <Item key={idx}>
          <Label>{item.label}</Label>
          {item.events.length && (
            <Events>
              {item.events.map((event, idx) => (
                <Event key={idx}>{event}</Event>
              ))}
            </Events>
          )}
        </Item>
      ))}
    </Styles>
  );
}
