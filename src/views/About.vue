<template>
  <div class="about">
    <b-container>
      <b-row>
        <div class="jumbotron" style="background-color: rgba(245, 245, 245, 0.4); ">
          <h1 class="display-4">JJ1POW局について</h1>
          <p class="lead">以下にいろいろご説明します。</p>
          <br>
          <br>
        </div>
      </b-row>
      <b-row>
        <div class="col-sm-6">
          <div class="card" style="background-color: rgba(245, 245, 245, 0.7); ">
            <div class="card-body">
              <h5 class="card-title">JJ1POW局について</h5>
              <p class="card-text">OP : ５０代のカムバックハムです。鎌倉市で小さくアマチュア無線局をしています。１９８０年頃に２エリアで局を開いてました。</p>
              <p class="card-text">QTH : 鎌倉市の浜および山岳エリア、さらに江ノ島や逗子で移動運用しています。自宅は江ノ電極楽寺駅近くです。</p>
              <p class="card-text">JARL : 本局はJARL非会員です。</p>
              <p class="card-text">QRZ.com : 本局は登録しています。サイト<a href="https://qrz.com" target="_blank">qrz.com</a>にアクセスしてください。</p>
              <p class="card-text">e-mailによる連絡 : jj1pow.jp@gmail.com</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style="background-color: rgba(245, 245, 245, 0.7); ">
            <div class="card-body">
              <h5 class="card-title">ハムラジ装置について</h5>
              <p class="card-text">周波数/モード/出力：50MHz SSB/CW 3W, 144-430MHz FM 1W, HF All 50W</p>
              <p class="card-text">リグ：井上電機製作所（ICOM）IC-502,NKT NKT-4G,YAESU FT-857DM</p>
              <p class="card-text">アンテナ:リグ内蔵のホイップアンテナ、自作ツエップアンテナ</p>
              <p class="card-text">電源：モバイルバッテリー＋昇圧ブースター</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </b-row>
      <b-row>
        <div class="col-sm-6">
          <div class="card" style="background-color: rgba(245, 245, 245, 0.7); ">
            <div class="card-body">
              <h5 class="card-title">QSLカードについて</h5>
              <p class="card-text">本局では受信記録カード(QSL Card)の作成を行っております。カード発行は電子媒体形式(pdf形式)のみになります。</p>
              <p class="card-text">本局はJARL非会員のため、相手局が電子媒体形式のQSLカードを発行している場合のみ、メールにてカード交換を行っています。</p>
              <p class="card-text">例：</p>
              <p class="card-text">・本局から相手局のJARLのメールアドレスに、本局QSLカードを送付してメール送信します。その返信メールで相手局から電子媒体のQSLカードを受信します。</p>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
<style scoped>
.about {
  background-image : url("../assets/ic_502_01.jpg");
  background-position: center center;
  background-size: cover;
}
</style>
