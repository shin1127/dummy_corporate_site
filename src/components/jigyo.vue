<template>
<div>
    <div>
    <img src="@/public/jigyo_img.jpg" id="main_img">
    </div>
    <br><br>
    <div class="main">
        <div class="detail_list">
            <div class="detail">
                <h2>システム開発・保守・運用</h2>
                <p>お客様のビジネスニーズに合わせ、Webアプリケーションやスマートフォンアプリの開発を手がけます。
                    また、運用保守にも力を入れており、お客様のシステムが安定稼働するためのサポートを行っています。</p>
            </div>
            <div class="detail">
                <h2>データ分析</h2>
            <p>お客様が保有するデータから、有用な情報を抽出し、ビジネスに生かすためのデータ分析を行っています。
                機械学習やディープラーニングを活用した高度な分析も行えます。</p>
            </div>
            <div class="detail">
                <h2>ITコンサルティング</h2>
                <p>お客様のビジネス戦略に沿ったIT戦略の策定や、システム導入・改善の支援を行っています。
                    また、情報セキュリティに関するコンサルティングも行っており、お客様の情報資産の保護に努めています。</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
</script>

<style>
#main_img{
    width:90%;
    max-width:700px;
    /* height: */
}

.main{
    padding-left:10%;
    padding-right:10%;
}

.detail{
    width:400px;
    padding:25px;
}

.detail_list{
    /* margin:30px; */
    /* width:450px */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>
