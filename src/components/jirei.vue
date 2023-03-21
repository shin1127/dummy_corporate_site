<template>
<div>
    <div>
    <img src="@/assets/jigyo_img.jpg" id="main_img">
    </div>
    <br><br>
    <div class="main">
        <div class="header">
        当社では、お客様のビジネス課題に対して、最適なソリューションを提供することをモットーにしています。<br>
        柔軟かつ迅速に対応し、お客様とともにビジネスの成長を目指します。
        </div>

        <div class="detail_list">
            <div class="detail">
            <h2>【事例1】</h2>
                <p>製造業企業様向けに、オンラインの受発注システムの開発・導入を行いました。
                    従来のFAXや電話でのやり取りに代わり、簡単に注文や納期の確認ができるようになり、業務の効率化と品質向上に貢献しました。
                </p>
            </div>

            <div class="detail">
            <h2>【事例2】</h2>
            <p>
            小売業企業様向けに、店舗の来客数をリアルタイムで把握するシステムの開発・導入を行いました。
            これにより、在庫管理や人員配置の最適化が可能となり、収益の向上につながりました。
            </p>
            </div>

            <div class="detail">
            <h2>【事例3】</h2>
            <p>
                医療機関様向けに、診療記録を電子化するシステムの開発・導入を行いました。
                これにより、診療現場での情報共有がスムーズになり、医療の質の向上につながりました。
            </p>
            </div>

            <div class="detail">
            <h2>【事例4】</h2>
            <p>
                物流業界の企業様向けに、ルート最適化システムの開発・導入を行いました。
                これにより、配送業務の効率化とコスト削減につながり、顧客満足度の向上につながりました。
            </p>
            </div>

            <div class="detail">
            <h2>【事例5】</h2>
            <p>
                人事業務の自動化に取り組む、人材サービス企業様向けに、面接選考の自動化システムの開発・導入を行いました。
                これにより、選考プロセスの効率化と人事担当者の業務負荷軽減につながり、採用活動の改善に貢献しました。
            </p>
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
