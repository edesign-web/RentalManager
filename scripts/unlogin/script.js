//----- ログインページ ここから -----

var page = document.getElementById( 'login_page' );


//ログインフォームの処理
let login_form = () => {

    let login_form = page.querySelector( '.login_form form' );


    //フォームのチェック
    let check = () => {

        let flag = true;

        let user_id       = login_form.querySelector( 'input[name="user_id"]' ).value;
        let user_password = login_form.querySelector( 'input[name="password"]' ).value;
        let submit_btn    = login_form.querySelector( 'button[type="submit"]' );

        if( !user_id || !user_password ){ //ユーザーIDとパスワードのチェック

            flag = false;

        }

        if( flag ){

            submit_btn.disabled = false;

        }else{

            submit_btn.disabled = true;

        }

    };

    //ユーザーIDの入力時の処理
    let oninput_user_id = () => {

        let user_id_input = login_form.querySelector( 'input[name="user_id"]' );

        //入力イベントの設定
        user_id_input.addEventListener( 'input', ( event ) => {

            check(); //フォームチェック

        } );

    }

    //パスワードの入力時の処理
    let oninput_user_password = () => {

        let user_password_input = login_form.querySelector( 'input[name="password"]' );

        //入力イベントの設定
        user_password_input.addEventListener( 'input', ( event ) => {

            check(); //フォームチェック

        } );

    }


    if( login_form ){

        check();                  //フォームのチェック
        oninput_user_id();       //ユーザーID入力時
        oninput_user_password(); //パスワード入力時

    }

};


if( page ){

    login_form(); //ログインフォームの処理

}

//----- ログインページ ここまで -----



//----- 認証ページ ここから -----

var page = document.getElementById( 'authentication_page' );


//認証フォームの処理
let authentication_form = () => {

    let authentication_form = page.querySelector( '.authentication_form form' );


    //フォームのチェック
    let check = () => {

        let flag = true;

        let user_mail  = authentication_form.querySelector( 'input[name="user_mail"]' ).value;
        let submit_btn = authentication_form.querySelector( 'button[type="submit"]' );

        if( !user_mail || !validation_check( user_mail, 'mail', '' ) ){ //メールアドレスのチェック

            flag = false;

        }

        if( flag ){

            submit_btn.disabled = false;

        }else{

            submit_btn.disabled = true;

        }

    };

    //メールアドレスの入力時の処理
    let oninput_user_mail = () => {

        let user_mail_field = authentication_form.querySelector( '.user_mail_field .text_field' );
        let user_mail_input = authentication_form.querySelector( 'input[name="user_mail"]' );

        //入力イベントの設定
        user_mail_input.addEventListener( 'input', ( event ) => {

            //エラーメッセージのセット
            let set_error_msg = ( () => {

                if( user_mail_input.value ){

                    if( validation_check( user_mail_input.value, 'mail', '' ) ){

                        set_input_error_msg( user_mail_field, '' );
    
                    }else{

                        set_input_error_msg( user_mail_field, '不正なメールアドレスが入力されています。' );

                    }

                }else{

                    set_input_error_msg( user_mail_field, 'メールアドレスが入力されていません。' );

                }

            } )();

            check(); //フォームチェック

        } );

    };



    if( authentication_form ){

        check();             //フォームのチェック
        oninput_user_mail(); //メールアドレスの入力時の処理

    }

};


if( page ){

    authentication_form(); //認証フォームの処理

}

//----- 認証ページ ここまで -----



//----- リセットパスワードページ ここから -----

var page = document.getElementById( 'reset_password_page' );


//リセットパスワードフォームの処理
let reset_password_form = () => {

    let reset_password_form = page.querySelector( '.reset_password_form form' );


    //フォームのチェック
    let check = () => {

        let flag = true;

        let new_password     = reset_password_form.querySelector( 'input[name="new_password"]' ).value;
        let password_confirm = reset_password_form.querySelector( 'input[name="password_confirm"]' ).value;
        let submit_btn       = reset_password_form.querySelector( 'button[type="submit"]' );

        if( !new_password || !validation_check( new_password, 'password', '' ) ){ //新しいパスワードのチェック

            flag = false;

        }

        if( !password_confirm || new_password !== password_confirm ){ //パスワードの確認のチェック

            flag = false;

        }

        if( flag ){

            submit_btn.disabled = false;

        }else{

            submit_btn.disabled = true;

        }

    };


    //新しいパスワードの入力時の処理
    let oninput_new_password = () => {

        let new_password_field = reset_password_form.querySelector( '.new_password_field .password_field' );
        let new_password_input = reset_password_form.querySelector( 'input[name="new_password"]' );

        let password_confirm_field = reset_password_form.querySelector( '.password_confirm_field .password_field' );
        let password_confirm_input = reset_password_form.querySelector( 'input[name="password_confirm"]' );

        //入力イベントの設定
        new_password_input.addEventListener( 'input', ( event ) => {

            //エラーメッセージのセット
            let set_error_msg = ( () => {

                if( new_password_input.value ){

                    if( validation_check( new_password_input.value, 'password', '' ) ){

                        set_input_error_msg( new_password_field, '' );
    
                    }else{

                        set_input_error_msg( new_password_field, 'パスワードは半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上で入力してください。' );

                    }
    
                    if( new_password_input.value === password_confirm_input.value ){
    
                        set_input_error_msg( password_confirm_field, '' );
    
                    }else{

                        set_input_error_msg( password_confirm_field, 'パスワードが一致しません' );

                    }

                }else{

                    set_input_error_msg( new_password_field, '新しいパスワードが入力されていません。' );

                }

            } )();

            check(); //フォームチェック

        } );

    };

    //パスワードの確認の入力時の処理
    let oninput_password_confirm = () => {

        let new_password_field = reset_password_form.querySelector( '.new_password_field .password_field' );
        let new_password_input = reset_password_form.querySelector( 'input[name="new_password"]' );

        let password_confirm_field = reset_password_form.querySelector( '.password_confirm_field .password_field' );
        let password_confirm_input = reset_password_form.querySelector( 'input[name="password_confirm"]' );

        //入力イベントの設定
        password_confirm_input.addEventListener( 'input', ( event ) => {

            //エラーメッセージのセット
            let set_error_msg = ( () => {

                if( password_confirm_input.value ){
    
                    if( new_password_input.value === password_confirm_input.value ){
    
                        set_input_error_msg( password_confirm_field, '' );
    
                    }else{

                        set_input_error_msg( password_confirm_field, 'パスワードが一致しません' );

                    }

                }else{

                    set_input_error_msg( password_confirm_field, 'パスワードの確認が入力されていません。' );

                }

            } )();

            check(); //フォームチェック

        } );

    };


    if( reset_password_form ){

        check();                    //フォームのチェック
        oninput_new_password();     //新しいパスワードの入力時の処理
        oninput_password_confirm(); //パスワードの確認の入力時の処理

    }

};


if( page ){

    reset_password_form();  //認証フォームの処理

}

//----- リセットパスワードページ ここまで -----