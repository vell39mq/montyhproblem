import React from 'react'

const Explain = () => {

  return (
    <div>
        <h3>ざっくりとした解説</h3>
        <p>あなたが最初に当たりを選択する確率は1/3ですので、<br/>
            残り2つの選択肢の中に当たりがある確率は2/3ということです。<br/>
            この残りの選択肢からハズレを1つ消すということは、<br/>
            残り2つの選択肢が1つに集約されるということですので、<br/>
            残った1つの選択肢に当たりがある確率は2/3ということです。
        </p>
    </div>
  )
}

export default Explain