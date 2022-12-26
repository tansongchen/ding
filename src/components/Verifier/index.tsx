import React, { ChangeEvent, Component, FormEvent } from 'react';

const findAffix = (string: Set<string>, prefix: Set<string>) => {
  let affixes = new Set<string>();
  for (let s of string) {
    for (let p of prefix) {
      if (s.startsWith(p) && s !== p) affixes.add(s.slice(p.length));
    }
  }
  return affixes;
}

const wildcardExpansion = (alphabet: string[], rawLanguage: string[]) => {
  const rawLanguageCopy = [...rawLanguage];
  const language = [];
  while (rawLanguageCopy.length) {
    const codeword = rawLanguageCopy.shift();
    if (codeword.includes('U')) {
      for (let letter of alphabet) {
        rawLanguageCopy.push(codeword.replace('U', letter));
      }
    } else {
      language.push(codeword);
    }
  }
  return language;
}

const isUnique = (alphabet: string[], rawLanguage: string[]) => {
  const language = new Set<string>(wildcardExpansion(alphabet, rawLanguage));
  const affixes = findAffix(language, language);
  let size: number;
  do {
    size = affixes.size;
    const affixes1 = findAffix(language, affixes), affixes2 = findAffix(affixes, language);
    [...affixes1, ...affixes2].forEach(x => affixes.add(x));
  } while (affixes.size > size)
  const intersect = [...language].filter(x => affixes.has(x));
  return intersect.length === 0;
}

class Verifier extends Component<object, { subsets: number, alphabet: string[], codewordList: string[], inputValue: string }> {
  constructor(props) {
    super(props);
    this.state = {
      subsets: 2,
      alphabet: ['A', 'B'],
      codewordList: [
        'AU',
        'AUB',
        'AUBB'
      ],
      inputValue: ''
    };
  }

  handleChange(event: ChangeEvent) {
    this.setState({ inputValue: (event.target as HTMLInputElement).value });
  }

  handleSubmit(event: FormEvent) {
    if (this.state.inputValue.split('').every(x => this.state.alphabet.includes(x) || x === 'U')) {
      this.setState(
        state => ({
          codewordList: state.codewordList.concat([state.inputValue]),
          inputValue: ''
        })
      );
      event.preventDefault();
    } else {
      alert('不符合要求');
      event.preventDefault();
    }
  }

  handleSelect(event: ChangeEvent) {
    const value = parseInt((event.target as HTMLSelectElement).value);
    this.setState({
      subsets: value,
      alphabet: ['A', 'B', 'C', 'D'].slice(0, value),
      codewordList: []
    });
  }

  handleDelete(index: number) {
    const tmpList = [...this.state.codewordList];
    tmpList.splice(index, 1);
    this.setState({ codewordList: tmpList });
  }

  render() {
    return <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <h2>输入</h2>
        <p>键盘数量：
          <select value={this.state.subsets} onChange={(event) => this.handleSelect(event)}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </p>
        <p>可用的字母为：{this.state.alphabet.join("、")} 和 U</p>
        <ul>
          {
            this.state.codewordList.map((codeword, index) =>
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                {codeword}
                <button onClick={() => this.handleDelete(index)}>删除</button>
              </li>)
          }
          <form onSubmit={(event) => this.handleSubmit(event)} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input type="text" value={this.state.inputValue} onChange={(event) => this.handleChange(event)} />
            <input type="submit" value="添加" />
          </form>
        </ul>
      </div>
      <div>
        <h2>输出</h2>
        <p>{this.state.codewordList.length === 0 ? '' : isUnique(this.state.alphabet, this.state.codewordList) ? '是' : '否'}</p>
      </div>
    </div>
  }
}

export default Verifier;
