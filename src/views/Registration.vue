<template>
  <div class="font-sans min-h-screen">
    <div class="flex flex-row justify-center">
      <img
        class="h-6 mt-5 mb-10 lg:my-6 object-contain"
        src="../assets/logo.png"
        alt=""
      />
    </div>
    <div class="border rounded-lg w-10/12 sm:w-8/12 lg:w-4/12 mx-auto mb-8">
      <div class="flex-wrap my-8">
        <p class="text-center text-lg font-semibold text-gray-600 my-1">
          Satu langkah lagi
        </p>
        <p class="text-center text-sm text-gray-600 mx-8">
          Mohon untuk mengisi data diri Anda terlebih dahulu, agar kami dapat
          memberi bantuan dengan lebih cepat dan tepat
        </p>
      </div>
      <div class="w-11/12 border-t border-gray-300 mx-auto"></div>
      <form @submit.prevent="submit">
        <div class="flex-wrap my-8 mx-8">
          <div class="block">
            <p class="text-gray-600 font-semibold text-sm">Nama</p>
            <input
              v-model.lazy="person.name"
              class="form-input mt-2 block w-full text-sm"
              :class="[ person.name == '' ? 'border border-red-600' : '' ]"
              value=""
            />
          </div>
          <div class="block mt-4">
            <p class="text-gray-600 font-semibold text-sm">Nomor Induk Kependudukan</p>
            <input
              v-model.lazy="person.nik" 
              class="form-input mt-2 block w-full text-sm"
              placeholder="Ex: 3272082006980001"
              value=""
            />
          </div>
          <div class="block mt-4">
            <p class="text-gray-600 font-semibold text-sm">Jenis Kelamin</p>
            <div class="mt-2">
              <label class="inline-flex items-center"  :class="[ person.gender != 'male' ? 'text-gray-500' : '' ]">
                <input
                  id="pria"
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="male"
                  v-model="person.gender"
                />
                <label class="ml-2 text-sm" for="pria">Pria</label>
              </label>
              <label class="inline-flex items-center ml-6" :class="[ person.gender != 'female' ? 'text-gray-500' : '' ]">
                <input
                  id="wanita"
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="female"
                  v-model="person.gender"
                />
                <label for="wanita" class="ml-2 text-sm">Wanita</label >
              </label>
            </div>
          </div>
          <div class="block mt-4">
            <p class="text-gray-600 font-semibold text-sm">Nomor Telepon</p>
            <input
              v-model.lazy="person.phone"
              class="form-input mt-2 block w-full text-sm"
              placeholder="Ex: 081216550299"
              value=""
            />
          </div>
          <div class="block mt-4">
            <p class="text-gray-600 font-semibold text-sm">Tanggal Lahir</p>
            <div class="mt-2">
              <v-date-picker
                v-model.number="date"
                locale="id-ID"
                :popover="{ placement: 'bottom', visibility: 'click' }"
              >
                <input
                  id="date"
                  name="datepicker"
                  type="date"
                  placeholder="Ex: 29/04/1999"
                  slot-scope="{ inputProps, inputEvents }"
                  :class="[
                    `appearance-none text-sm border rounded w-full py-2 px-3`
                  ]"
                  v-bind="inputProps"
                  v-on="inputEvents"
                />
              </v-date-picker>
            </div>
          </div>
          <div class="block mt-4">
            <p class="text-gray-600 font-semibold text-sm">Provinsi</p>
            <select
              class="form-select mt-1 block w-full text-sm capitalize"
              :class="inputStyle(state.province)"
              @change="province"
              v-model="state.province"
              placeholder="No"
            >
              <option value="" disabled selected>Pilih Provinsi</option>
              <option
                v-for="province in provinces.data"
                :value="province.id"
                :key="province.id"
                >{{ province.name.toLowerCase() }}</option
              >
            </select>
          </div>
          <div class="block mt-4"  :class="[ state.province != '' ? '' : 'hidden' ]">
            <p class="text-gray-600 font-semibold text-sm">Kota/Kabupaten</p>
            <select
              class="form-select mt-1 block w-full text-sm capitalize"
              :class="inputStyle(state.regency)"
              @change="regency"
              v-model="state.regency"
            >
              <option value="" disabled selected>Pilih Kota/Kabupaten</option>
              <option
                v-for="regency in regencies.data"
                :value="regency.id"
                :key="regency.id"
                >{{ regency.name.toLowerCase() }}</option
              >
            </select>
          </div>
          <div class="block mt-4"   :class="[ state.regency != '' ? '' : 'hidden' ]">
            <p class="text-gray-600 font-semibold text-sm">Kecamatan</p>
            <select
              class="form-select mt-1 block w-full text-sm text-gray-500 capitalize"
              :class="inputStyle(state.district)"
              v-model="state.district"
            >
              <option value="" disabled selected>Pilih Kecamatan</option>
              <option
                v-for="district in districts.data"
                :value="district.id"
                :key="district.id"
                >{{ district.name.toLowerCase() }}</option
              >
            </select>
          </div>
          <div class="block mt-4">
            <p class="text-gray-600 font-semibold text-sm">Alamat</p>
            <input
              v-model="state.address"
              class="form-input mt-2 block w-full text-sm"
              placeholder="Masukkan alamat anda"
            />
          </div>
          <div class="block mt-8">
            <v-button type="submit" msg="Dapatkan Bantuan" class="py-3" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VCalendar from "v-calendar";
import Button from "@/components/Button.vue";

Vue.use(VCalendar, {
  locales: {
    'id-ID': {
      masks: {
        L: 'YYYY-MM-DD',
        // ...optional `title`, `weekdays`, `navMonths`, etc
      }
    }
  }
});

export default {
  name: "test",
  props: ['idToken'],
  components: {
    "v-button": Button
  },
  data: function() {
    return {
      date: '',
      baseUrl: 'https://x.rajaapi.com/MeP7c5ne',
      person : {
        name: '',
        gender: '',
        nik: '',
        phone: '',
      },
      key: '',
      state: {
        province: "",
        regency: "",
        district: "",
        address: "",
      },
      provinces: [],
      regencies: [],
      districts: [],
      output: [],
      clientData: [],
    };
  },
  /* eslint-disable no-console */
  async mounted() {

    await axios
    .get("https://x.rajaapi.com/poe")
    .then(
      response => (
        this.key = response.data.token
      )
    )

    const suffixUrl = "/m/wilayah/provinsi"
    const url = this.baseUrl+this.key+suffixUrl

    await axios
      .get(url)
      .then(
        response => (
          console.log(response.data), 
          this.provinces = response.data
        )
      )
      .catch(error => console.error(error));
    
    const params = {
        id_token: this.idToken
    }

    await axios
    .get("https://oauth2.googleapis.com/tokeninfo", { params })
    .then(
      response => (
        this.clientData = response.data,
        this.person.name = this.clientData.name
      )
    )

    await axios
    .post('https://tkm.riliv.co.id/api/v0/tkm/auth/login', {
        name: this.clientData.given_name,
        avatar: this.clientData.picture,
        email: this.clientData.email,
    })
    .then( response => (
        console.log(response.data),
        this.output = response.data,
        this.userId = response.data.user_id
    ))
    .catch( error => (
        console.log(error),
        this.output = error
    ));
  },
  methods: {
    province() {
      this.state.regency = "";
      this.state.district = "";

      // set params
      const suffixUrl = "/m/wilayah/kabupaten"
      const url = this.baseUrl+this.key+suffixUrl
      const params = {
        //nyesuain API Call dari rajaapi.com
        idpropinsi: this.state.province
      };

      // url /wilayah/kabupaten?idpropinsi=xxx
      axios
        .get(url, { params })
        .then(response => {
          this.regencies = response.data;
        })
        .catch(error => console.error(error));
    },
    regency() {
      this.state.district = "";

      const suffixUrl = "/m/wilayah/kecamatan"
      const url = this.baseUrl+this.key+suffixUrl
      // set params
      const params = {
        idkabupaten: this.state.regency
      };

      axios
        .get(url, { params })
        .then(response => {
          this.districts = response.data;
        })
        .catch(error => console.error(error));
    },
    submit: function(){

      const userId = this.output.user_id
      const date = document.querySelector("input[id=date]").value

      console.log(date)

      axios
        .post('https://tkm.riliv.co.id/api/v0/tkm/user/register', {
            user_id: this.output.user_id,
            provinsi: this.state.province,
            kabupaten: this.state.regency,
            kecamatan: this.state.district,
            alamat : this.state.address,
            name : this.person.name,
            nik : this.person.nik,
            phone : this.person.phone,
            gender : this.person.gender,
            birthdate : date
        })
        .then( response => (
            console.log(response.data),
            this.output = response.data,
            this.userId = response.data.user_id,
            this.$router.push({ name: 'test', params: { userId } })

        ))
        .catch( error => (
            console.log(error.response),
            this.output = error.response
        ));
      },
    inputStyle: function (targetInput) { // bind with one method and return Array
      return [targetInput == '' ? 'text-gray-500' : 'text-gray-800']
    }
  },
  /* eslint-enable no-console */
};
</script>

<style></style>
