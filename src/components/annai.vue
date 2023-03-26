<template>
<div>
    <div class="main">
        <img src="@/public//build.jpg" id="main_img">
        <br><br>
        <div class="greeting_list">
            <div class="greeting_card">
                <img src="@/public//shatyo.jpg" id="shatyo_img">
                <div class="ceo_name">代表  与謝野 明子</div>
            </div>
            <div class="greeting_card">
            私たち日本エンジニアリングは、お客様が抱える課題を解決するために最適なソリューションを提供することをモットーに、日々邁進しております。
        現在は、急速に進化するテクノロジーに対応し、新しいサービスの開発や既存サービスの改善を行っております。
        お客様のニーズに合わせた最適なソリューションを提供するために、社員一同、知恵を結集し、日々精進しております。
        今後も、お客様に満足いただける製品・サービスを提供するために、弊社は一層努力を重ねてまいります。
        今後とも、日本エンジニアリングをよろしくお願い申し上げます。
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

#shatyo_img{
    width:90%;
    max-width:350px;
    /* padding:30px; */
    /* height: */
}

.greeting_card{
    padding-left:15px;
    padding-right:15px;
    padding-top:15px;
    padding-bottom:15px;
    width:500px;
}

.greeting_list{
    /* margin:30px; */
    /* width:450px */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.ceo_name{
    font-weight:bold
}

</style>
