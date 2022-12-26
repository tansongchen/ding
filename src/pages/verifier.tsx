import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Verifier from '../components/Verifier';

export default function(): JSX.Element {
  return (
    <Layout
      description="这里存放了我用 Obsidian 记录的笔记。">
      <main style={{maxWidth: '960px', padding: '2rem', margin: 'auto'}}>
        <h1>顶功验证器</h1>
        <p>本页面可用于验证您设计的顶功方案是否为唯一可译码。您可以首先选择您需要的码元划分组数，然后逐个添加描述编码的表达式。</p>
        <p>表达式的可用符号为 U、A、B、C、……。U 表示全部符号集，A、B、C、……是各个互不相交的子集。</p>
        <Verifier />
      </main>
    </Layout>
  );
}
