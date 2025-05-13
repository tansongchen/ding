import React from 'react';
import Layout from '@theme/Layout';
import Verifier from '../components/Verifier';

export default function VerifierPage(): JSX.Element {
  return (
    <Layout
      title='方案验证器'
      description="基于 React 的方案验证小程序">
      <main style={{maxWidth: '960px', padding: '2rem', margin: 'auto'}}>
        <h1>方案验证器</h1>
        <p>本页面可用于验证您设计的顶功或前缀码方案是否为唯一可译码。您可以首先选择您需要的码元划分组数，然后逐个添加描述编码的表达式。</p>
        <p>表达式的可用符号为 U、A、B、C、……。U 表示全部符号集，A、B、C、……是各个互不相交的子集。</p>
        <Verifier />
      </main>
    </Layout>
  );
}
