<template>
  <v-container class="mx-auto my-10">
    <v-card raised shaped max-width="600px" class="mx-auto px-4 py-3">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-card flat>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="first_name"
                  :counter="15"
                  :rules="nameRules"
                  label="First Name"
                  required
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="last_name"
                  :counter="15"
                  :rules="nameRules"
                  label="Last Name"
                  required
                ></v-text-field
              ></v-col>
            </v-row>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="phone"
              :rules="nameRules"
              label="Phone Number"
              :counter="10"
              required
            ></v-text-field>
            <v-text-field
              v-model="city"
              :counter="25"
              :rules="cityRules"
              label="Potential City"
              required
            ></v-text-field>
            <v-row>
              <v-col cols="6">
                <v-select
                  v-model="price"
                  :items="priceRange"
                  :rules="[(v) => !!v || 'Item is required']"
                  label="Price Range"
                  required
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="size"
                  :items="sqFootage"
                  :rules="[(v) => !!v || 'Item is required']"
                  label="Sq. Footage"
                  required
                ></v-select
              ></v-col>
            </v-row>

            <div>
              <v-row>
                <v-col cols="9">
                  <v-text-field
                    label="Date"
                    v-model="appointment"
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-dialog
                    v-model="dialog"
                    transition="dialog-bottom-transition"
                    persistent
                  >
                    <template v-slot:activator="{ on, attrs }"
                      ><v-btn
                        class="primary white--text mt-3"
                        v-bind="attrs"
                        v-on="on"
                        ><v-icon>mdi-calendar-clock</v-icon></v-btn
                      ></template
                    >
                    <template v-slot:default>
                      <v-sheet color="white">
                        <v-date-picker
                          :min="today"
                          full-width
                          v-model="picker"
                        ></v-date-picker>
                        <div class="">
                          <time-picker @save="saveDate"></time-picker>
                        </div>
                      </v-sheet>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn class="primary">Submit</v-btn>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
function minDate() {
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  const date = new Date()
    .addDays(1)
    .toISOString()
    .substring(0, 10);
  return date;
}
import TimePicker from "./TimePicker.vue";
export default {
  components: {
    TimePicker,
  },
  data: () => ({
    today: minDate(),
    dialog: false,
    appointment: null,
    valid: true,
    first_name: "",
    last_name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 15) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    city: "",
    cityRules: [
      (v) => !!v || "City is required",
      (v) => (v && v.length <= 25) || "City must be valid",
    ],
    price: null,
    size: null,
    phone: "",
    priceRange: [
      "$200,000 - $300,000",
      "$300,000 - $400,000",
      "$400,000 - $500,000",
      "$500,000 - $600,000",
      "$600,000 +",
    ],
    sqFootage: [
      "1,000 - 1,250",
      "1,250 - 1,500",
      "1,500 - 1,800",
      "1,800 - 2,000",
      "2,000 - 2,500",
      "2,500 - 3,000",
      "3,000 - 4,000",
      "4,000 +",
    ],
    checkbox: false,
    picker: new Date().toISOString().substr(0, 10),
  }),

  methods: {
    saveDate($event) {
      this.dialog = false;

      const date = new Date(this.picker);

      this.appointment = `${date.toDateString()} @ ${$event} `;
      console.log(this.appointment);
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
.time-select {
  padding-top: 12px;
  margin-top: 4px;
}
.time-select label {
  margin-top: -50px;
  margin-right: -28px;
}
.time-hours,
.time-minutes {
  width: 40px;
  min-width: 40px !important;
  height: 32px !important;
}
.time-hours .v-btn__content i.v-icon,
.time-minutes .v-btn__content i.v-icon {
  margin-left: -4px;
}

.time-select .toggle-am-pm .v-btn.v-size--default {
  width: 36px;
  min-width: 36px !important;
  height: 32px !important;
  padding-left: 0;
  padding-right: 0;
}
</style>
