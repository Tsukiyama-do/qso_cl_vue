<template>
  <div class="qslup">
    <b-container>
      <b-row>
        <div class="jumbotron" style="background-color: rgba(245, 245, 245, 0.7); ">
          <!-- Header section for jumbotron -->
          <h1 class="display-4">QSLカードのアップロード</h1>
          <p class="lead">貴局のQSLカードのファイルをアップロードするには、以下の[コールサイン]フィールドに貴局呼出符号を記載の上、</p>
          <p class="lead">[ファイルを選択]ボタンを押下してファイルを選択して読み込ませます。次に[アップロードボタン]を押下するとサーバへアップロードされます。</p>
          <p class="lead">登録できるファイル形式は、pdf, jpeg, jpg, pngになります。</p>
          <p class="lead">(本機能は構築途中です。お待ちください）</p>
          <br>
          <b-form @submit="onSubmitc" >
            <b-input-group id="input-gp-callsign" prepend="Callsign" class="mt-3">
              <b-form-input id="input-callsign" v-model="form.callsign" width="6" size="6" pattern="[a-zA-Z0-9]{4,6}" placeholder="貴局コールサイン（６文字以内）"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" variant="outline-primary">登録</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Qslupload',
  data: function () {
    return {
      form: {
        callsign: ''
      }
    }
  },
  methods: {
    onSubmitc: function (evt) {
      evt.preventDefault()
      alert('I am sorry, the uploading is under constructions.')
    }
  }
}
</script>

<style scoped>
.qslup {
  background-image : url("../assets/ic_502_01.jpg");
  background-position: center center;
  background-size: cover;
}
</style>
