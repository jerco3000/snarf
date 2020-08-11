<template>
    <div class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Login</ion-title>
                <ion-buttons slot="end">
                    <ion-button clear @click="$router.push('about')">
                        <span>About</span>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content padding>
            <form novalidate>
                <ion-list>
                    <ion-item>
                        <ion-label position="stacked" color="primary">email</ion-label>
                        <ion-input
                                v-validate="'email|required'"
                                data-vv-as="email"
                                @input="credentials.email = $event.target.value"
                                :value="credentials.email"
                                name="username"
                                type="text"
                                spellcheck="false"
                                autocapitalize="off"
                        ></ion-input>
                    </ion-item>
                    <span
                            v-show="errors.has('username')"
                            class="help is-danger"
                    >{{ errors.first('username') }}</span>
                    <ion-item>
                        <ion-label position="stacked" color="primary">Password</ion-label>
                        <ion-input
                                v-validate="{min:5, max:11, required:true}"
                                data-vv-as="field"
                                @input="credentials.password = $event.target.value"
                                :value="credentials.password"
                                name="password"
                                type="password"
                        ></ion-input>
                    </ion-item>
                    <span
                            v-show="errors.has('password')"
                            class="help is-danger"
                    >{{ errors.first('password') }}</span>
                </ion-list>

                <ion-row responsive-sm>
                    <ion-col>
                        <ion-button
                                :disabled="errors.items.length !== 0 || this.isFormPristine"
                                @click="doLogin()"
                                expand="full"
                        >Login</ion-button>

                        <ion-button @click="doCreateAccount()" color="light" expand="full">Create Account</ion-button>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-label style="text-align: center;">OR</ion-label>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-button @click="doSocialMediaLogin('facebook')" color="light" expand="full">
                            <ion-icon name="logo-facebook" style="font-size:32px"></ion-icon>
                        </ion-button>
                    </ion-col>
                    <ion-col>
                        <ion-button @click="doSocialMediaLogin('instagram')" color="light" expand="full">
                            <ion-icon name="logo-instagram" style="font-size:32px"></ion-icon>
                        </ion-button>
                    </ion-col>
                    <ion-col>
                        <ion-button @click="doSocialMediaLogin('twitter')" color="light" expand="full">
                            <ion-icon name="logo-twitter" style="font-size:32px"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </form>
        </ion-content>
        <ion-footer>
            <ion-row>
                <ion-col>
                    <ion-button size="small" @click="openModal()" color="light" expand="full">Forgot Password</ion-button>
                </ion-col>
            </ion-row>
        </ion-footer>
    </div>
</template>

<script>

</script>
<style scoped>
    .help.is-danger {
        color: #ff3860;
    }
    .help {
        display: block;
        font-size: 0.75rem;
        margin-top: 0.25rem;
    }
</style>