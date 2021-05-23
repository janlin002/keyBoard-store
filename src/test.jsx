import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./loading/loading";

const Example = () => (
  <Section>
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#fff" />
      </Article>
    ))}
  </Section>
);

export default Example;

