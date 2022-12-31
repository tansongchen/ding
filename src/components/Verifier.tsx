import React from 'react';
import { useState } from 'react';
import styles from '../css/Verifier.module.css';

const leftQuotient = (dividend: Set<string>, divisor: Set<string>) => {
  const affixes = new Map<string, [string, string]>();
  for (const s of dividend) {
    for (const p of divisor) {
      if (s.startsWith(p)) {
        const a = s.slice(p.length);
        if (!affixes.has(a)) affixes.set(a, [s, p]);
      }
    }
  }
  return affixes;
}

const wildcardExpansion = (alphabet: string[], rawLanguage: string[]) => {
  const rawLanguageCopy = [...rawLanguage];
  const language = [];
  while (rawLanguageCopy.length) {
    const codeword = rawLanguageCopy.shift()!;
    if (codeword.includes('U')) {
      for (const letter of alphabet) {
        rawLanguageCopy.push(codeword.replace('U', letter));
      }
    } else {
      language.push(codeword);
    }
  }
  return language.sort();
}

const findAmbiguity = (alphabet: string[], rawLanguage: string[]) => {
  const language = new Set<string>(wildcardExpansion(alphabet, rawLanguage));
  const affixes = new Map<string, [string[], string[]]>();
  for (const [a, [s, p]] of leftQuotient(language, language)) {
    if (a) affixes.set(a, [[s], [p]]);
  }
  for (const a of language) {
    if (affixes.has(a)) {
      const [x, y] = affixes.get(a)!;
      return [x, [...y, a]]
    }
  }
  let size: number;
  do {
    size = affixes.size;
    const keys = new Set(affixes.keys());
    const affixes1 = leftQuotient(language, keys), affixes2 = leftQuotient(keys, language);
    for (const [a, [s, p]] of affixes1) {
      // a = p^-1 s, while p = y^-1 x, so a = x^-1 y s
      const [x, y] = affixes.get(p)!;
      if (!affixes.has(a)) {
        affixes.set(a, [[...y, s], x])
      }
    }
    for (const [a, [s, p]] of affixes2) {
      // a = p^-1 s, while s = y^-1 x, so a = p^-1 y^-1 x = (yp)^-1 x
      const [x, y] = affixes.get(s)!;
      if (!affixes.has(a)) {
        affixes.set(a, [x, [...y, p]]);
      }
    }
    for (const a of language) {
      if (affixes.has(a)) {
        const [x, y] = affixes.get(a)!;
        return [x, [...y, a]]
      }
    }
  } while (affixes.size > size)
}

function Verifier() {
  const [subsets, setSubsets] = useState<number>(2);
  const [codewordList, setCodewordList] = useState<string[]>(['AU', 'AUB', 'AUBB']);
  const [inputValue, setInputValue] = useState<string>('');
  const maxAlphabet = ['A', 'B', 'C', 'D'];
  const alphabet = maxAlphabet.slice(0, subsets);
  const ambiguity = findAmbiguity(alphabet, codewordList);

  function handleAddCodeword() {
    if (inputValue.split('').every(x => alphabet.includes(x) || x === 'U')) {
      setCodewordList(codewordList.concat([inputValue]));
    } else {
      alert('码字不符合要求');
    }
    setInputValue('');
  }

  function handleDeleteCodeword(index: number) {
    const tmpList = [...codewordList];
    tmpList.splice(index, 1);
    setCodewordList(tmpList);
  }

  return <div className={styles.main}>
    <div className={styles.editor}>
      <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>键盘数量</span>
        <select className={styles.selector} value={subsets} onChange={event => setSubsets(parseInt(event.target.value))}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </p>
      <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>可用的字母</span>
        <span>{alphabet.join("、")} 和 U</span>
      </p>
      <ul style={{padding: '.5rem'}}>
        {
          codewordList.map((codeword, index) =>
            <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{codeword}</span>
              <button onClick={() => handleDeleteCodeword(index)}>删除</button>
            </li>)
        }
        <li  style={{ display: 'flex', justifyContent: 'space-between', height: '26px' }}>
          <input type="text" value={inputValue} style={{width: '5rem', border: '1px solid #aaa', borderRadius: '3px'}} onChange={event => setInputValue(event.target.value)} />
          <button onClick={handleAddCodeword}>添加</button>
        </li>
      </ul>
    </div>
    <div className={styles.result} style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <p style={{textAlign: 'center'}}>{codewordList.length ? (ambiguity === undefined ? '✅ 该方案是唯一可译码' : '❌ 该方案不是唯一可译码') : ''}</p>
      {
        ambiguity !== undefined && <div>
          <p>解码存在歧义：字符串 {ambiguity[0].join('')} 有两种解码方式：</p>
          <ul>
            <li>{ambiguity[0].join(' * ')}</li>
            <li>{ambiguity[1].join(' * ')}</li>
          </ul>
        </div>
      }
    </div>
  </div>
}

export default Verifier;
