import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  /*
   * The State is the data stored in your application.
   * Your components can “receive” this data and when it changes your component
   * will update itself. This is the “single source of truth” in your application.
   * */
  state: {
    User: false, //true, false
    /*********
     * deberia llevar:
     * usuario, empresa, sucursal
     * Por si entra otro usuario o si se cambia de tienda
     * ojo al minuto de MOSTRAR, debe tomar en consideracion estos datos
     * para filtrar los mismos
     * *******/

    //{emp_run:90749000, suc_empresa_id:3, pp_codigo: '87288662342', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 2},
    //Este "Cart" graba todos los productos de diferentes sucursales y otros para guardar
    /*
        Cart: [
            {emp_run:90749000, suc_empresa_id:3, pp_codigo: '87288662342', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 2},
            {emp_run:90749000, suc_empresa_id:3, pp_codigo: '23499315364', pp_nombre: 'Pantalon', pp_descripcion: 'Pantalon Hombre' ,pp_url:'http://', pp_preciobruto:18320, pp_iva: 3481, pp_precioneto: 21801, pp_cantidad: 1},
            {emp_run:90749000, suc_empresa_id:3, pp_codigo: '23422315364', pp_nombre: 'Pantalon', pp_descripcion: 'Pantalon Hombre' ,pp_url:'http://', pp_preciobruto:18320, pp_iva: 3481, pp_precioneto: 21801, pp_cantidad: 1},
            {emp_run:90749000, suc_empresa_id:3, pp_codigo: '87266662342', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 1},
            {emp_run:90749000, suc_empresa_id:3, pp_codigo: '87211662342', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 1},
            {emp_run:90749000, suc_empresa_id:3, pp_codigo: '87222662342', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 1},
            {emp_run:0, suc_empresa_id:1, pp_codigo: '2343462345', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 1},
            {emp_run:0, suc_empresa_id:1, pp_codigo: '3453452680', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 1},
        ],
        */
    Cart: [],
    //Este "CartEmpSuc" es el carro que se carga con solo los productos de empresa y sucursal especificas.
    CartEmpSuc: [],
    BarCode: null, //Codigo de Barra desde Scanner
    emp_run: null,
    suc_empresa_id: "",
    emp_logo_url: "",
    suc_nombre: "",
    reload: true,
  },
  /*
   * The store manages the state. It should only be mutated from within, so outside
   * components can not directly modify the state. To mutate the state,
   * components can dispatch an action or commit a mutation.
   * */
  store: {},
  /*
   * To update a state you will need to commit a mutation.
   * A mutation does not care about business logic, it’s only
   * purpose is updating the state. A mutation is synchronous
   * (your code has to wait until the mutation is done).
   * Mutations should be the only way used to update your state,
   * to keep your state management predictable.
   * */
  mutations: {
    User(state, User) {
      state.User = User;
    },
    //cartAddProduct(state, emp_run, suc_empresa_id, pp_codigo, pp_nombre, pp_descripcion,pp_url , pp_preciobruto, pp_iva, pp_precioneto, pp_cantidad){
    cartAdd(state, data) {
      //{emp_run:90749000, suc_empresa_id:3, pp_codigo: '87288662342', pp_nombre: 'Camiseta', pp_descripcion: 'Camiseta Hombre' ,pp_url:'http://', pp_preciobruto:8320, pp_iva: 1580, pp_precioneto: 9900, pp_cantidad: 2}
      // users = users.filter(obj => obj.name == filter.name && obj.address == filter.address)
      //const result = state.Cart.filter(producto => producto[0]['emp_run'] == data[0]['emp_run']);
      // array.filter(function(item, indx, arr){ return(item.hello === 'stevie'); })[0];
      //pos = myArray.map(function(e) { return e.hello; }).indexOf('stevie');
      //var a = state.Cart.map(function(e) { return e.emp_run; }).indexOf(0);
      // var index = array.map(function(o){return o.color + o.shape}).indexOf('red' + 'circle')
      var index = state.Cart.map(function(o) {
        return o.emp_run + o.suc_empresa_id + o.pp_codigo;
      }).indexOf(data[0].emp_run + data[0].suc_empresa_id + data[0].pp_codigo);
      if (index != -1) {
        state.Cart[index].pp_cantidad = state.Cart[index].pp_cantidad + 1;
      } else {
        this.state.Cart.push(data[0]);
      }
      this.commit("GenerateCartEmpSuc");
    },
    CartNull(state) {
      state.Cart = "";
    },
    BarCodeSet(state, barcode) {
      state.BarCode = barcode;
    },
    BarCodeNull(state) {
      state.BarCode = null;
    },
    CartProductAdd(state, pkey) {
      //state.Cart.map(function(o){return o.emp_run + o.suc_empresa_id + o.pp_codigo}).indexOf(data[0].emp_run + data[0].suc_empresa_id + data[0].pp_codigo);
      //const producto = state.Cart.find(producto => producto.pp_codigo === pkey)
      //producto.pp_cantidad ++;
      //this.commit('GenerateCartEmpSuc');
      var index = state.Cart.map(function(o) {
        return o.emp_run + o.suc_empresa_id + o.pp_codigo;
      }).indexOf(state.emp_run + state.suc_empresa_id + pkey);
      if (index != -1) {
        state.Cart[index].pp_cantidad = state.Cart[index].pp_cantidad + 1;
      }
      this.commit("GenerateCartEmpSuc");
    },
    CartProductSub(state, pkey) {
      //const producto = state.Cart.find(producto => producto.pp_codigo === pkey)
      //if(producto.pp_cantidad>1){
      //    producto.pp_cantidad --;
      //} else {
      //    this.commit('CartProductDelete', pkey);
      //}
      //this.commit('GenerateCartEmpSuc');
      var index = state.Cart.map(function(o) {
        return o.emp_run + o.suc_empresa_id + o.pp_codigo;
      }).indexOf(state.emp_run + state.suc_empresa_id + pkey);
      if (index != -1) {
        if (state.Cart[index].pp_cantidad > 1) {
          state.Cart[index].pp_cantidad = state.Cart[index].pp_cantidad - 1;
        } else {
          this.commit("CartProductDelete", pkey);
        }
      }
    },
    CartProductDelete(state, pkey) {
      //const producto = state.Cart.find(producto => producto.pp_codigo === pkey)
      //producto.splice(pkey, 1);
      var index = state.Cart.map(function(o) {
        return o.emp_run + o.suc_empresa_id + o.pp_codigo;
      }).indexOf(state.emp_run + state.suc_empresa_id + pkey);
      //state.Cart.splice(state.Cart.indexOf(state.Cart.find(producto => producto.pp_codigo === pkey)),1)
      state.Cart.splice(state.Cart[index], 1);
      this.commit("GenerateCartEmpSuc");
    },
    GenerateCartEmpSuc(state) {
      /***************
             const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

             const result = words.filter(word => word.length > 6);

             console.log(result);
             // expected output: Array ["exuberant", "destruction", "present"]

             * *******************/
      const cart = state.Cart;
      const cartempsuc = cart.filter(
        (cart) =>
          cart.emp_run == state.emp_run &&
          cart.suc_empresa_id == state.suc_empresa_id
      );
      state.CartEmpSuc = cartempsuc;
    },
    DefineEmpRun(state, emp_run) {
      state.emp_run = emp_run;
    },
    DefineSucEmpresaId(state, suc_empresa_id) {
      state.suc_empresa_id = suc_empresa_id;
    },
    DefineEmpLogoUrl(state, logoUrl) {
      state.emp_logo_url = logoUrl;
    },
    DefineSucNombre(state, sucnombre) {
      state.suc_nombre = sucnombre;
    },
    ReloadTrue(state) {
      state.reload = true;
    },
    ReloadFalse(state) {
      state.reload = false;
    },
  },
  /*
   * Getters compute properties based on the store state.
   * You can use these in your actions or directly in your component.
   * This is useful if several components need to calculate the same
   * thing based on the store data, you can do it in one place instead of
   * having to do it separately for each component.
   * */
  getters: {
    User: (state) => state.User,
    Cart: (state) => state.Cart,
    CartEmpSuc: (state) => state.CartEmpSuc,
    BarCode: (state) => state.BarCode,
    Emprun: (state) => state.emp_run,
    Sucempresaid: (state) => state.suc_empresa_id,
    EmpLogoUrl: (state) => state.emp_logo_url,
    SucNombre: (state) => state.suc_nombre,
    Reload: (state) => state.reload,
  },
  /*
   * An action contains business logic and it does not care about updating
   * the state directly. The reason is that actions are asynchronous
   * (your code can continue to run even if the action is not finished yet),
   * this is useful if you need to wait to receive data from an API for example.
   * An action will dispatch a mutation, which will directly update the state.
   * */
  actions: {},
  plugins: [createPersistedState()],
});
