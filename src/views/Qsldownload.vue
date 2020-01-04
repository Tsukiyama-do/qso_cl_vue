<template>
  <div class="qsldown">
    <b-container>
      <b-row>
        <div class="jumbotron" style="background-color: rgba(245, 245, 245, 0.7); ">
          <!-- Header section for jumbotron -->
          <h1 class="display-4">QSLカードのダウンロード</h1>
          <p class="lead">貴局のコールサインを入力して、当局が用意したQSLカードをダンロードできます。</p>
          <p class="lead">（タイミングによってはQSLカードの準備に時間がかかる場合があります。）</p>
          <p class="lead">コールサインあるいは交信日（期間指定)して、貴局宛のQSLカードを検索できます。ファイル形式は、pdfです。</p>
          <br>
          <!-- Inqury form to callsigns -->
          <b-form @submit="onSubmitc" @reset="onSubmitp">
            <b-input-group id="input-gp-callsign" prepend="Callsign" class="mt-3">
              <b-form-input id="input-callsign" v-model="form.callsign" width="6" size="6" pattern="[a-zA-Z0-9]{4,6}" placeholder="貴局コールサイン（６文字以内）"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" variant="outline-primary">検索</b-button>
              </b-input-group-append>
            </b-input-group>
            <b-input-group id="input-gp-period" prepend="日付" class="mt-4">
              <b-form-input id="input-period-start" type="date" v-model="form.frdate"></b-form-input>
              <b-form-input id="input-period-end" type="date" v-model="form.todate"></b-form-input>
              <b-input-group-append>
                <b-button type="reset" variant="outline-primary">検索</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form>
          <br />
          <!-- Display QSL card lists -->
          <b-table striped hover :items="items" :fields="fields">
            <template v-slot:cell(File)="data" >
              <!-- `data.value` is the value of File field -->
              <a :href="urlget(data.value)">{{ data.value }}</a>
            </template>
          </b-table>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Qsldownload',
  data: function () {
    return {
      golang_url: 'https://jj1pow.com:8444',
      form: {
        //    Fields of conditions for searching QSL cards
        callsign: '',
        frdate: null,
        todate: null
      },
      //    Callsign and file lists
      fields: ['No.', 'Callsign', 'Date', 'File'],
      items: []
    }
  },
  methods: {
    //    Run on clicking on Upper "Toroku" button
    onSubmitc: function (evt) {
      evt.preventDefault()
      //      alert('push 1 ' + JSON.stringify(this.form))
      console.log('push 1 ' + JSON.stringify(this.form))
      //    Initialize list items
      this.items = []
      //    Post-operation to get qsl files with conditions
      this.axios.get('/qsldown', { baseURL: this.golang_url, params: this.form })
        .then((res) => {
          console.log(res)
          //    Pass the result to items
          this.items = JSON.parse(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //    Run on clicking on Lower "Toroku" button
    onSubmitp: function (evt) {
      evt.preventDefault()
      //      alert('push 2 ' + JSON.stringify(this.form))
      console.log('push 2 ' + JSON.stringify(this.form))
      //    Initialize list items
      this.items = []
      //    Post-operation to get qsl files with conditions
      this.axios.post('/qsldown', { baseURL: this.golang_url, params: this.form })
        .then((res) => {
          console.log(res)
          //    Pass the result to items
          this.items = JSON.parse(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    urlget: function (ob) {
      // It creates string of href.
      return this.golang_url + '/downloads/' + ob
    }
  }
}
</script>

<style scoped>
.qsldown {
  background-image : url("../assets/ic_502_01.jpg");
  background-position: center center;
  background-size: cover;
}
</style>
