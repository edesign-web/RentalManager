//バリデーションチェック
function validation_check( value, rule, options ){

    if( !value ){

        return true;

    }

    //メールアドレス
    if( rule == 'mail' ){

        let pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

        if( pattern.test( value ) ){

            return true;

        }else{

            return false;

        }

    }

    //パスワード
    if( rule == 'password' ){

        let pattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]+$/;

        if( value.length >= 8 && pattern.test( value ) ){

            return true;

        }else{

            return false;

        }

    }

    return true;

};


//入力エラーメッセージのセット
function set_input_error_msg( field, error_msg ){

    let msg_field = field.querySelector( '.error_msg' );
    
    if( !msg_field ){

        return;

    }

    if( error_msg ){

        msg_field.textContent = error_msg;
        field.classList.add( 'incorrect' );

    }else{

        msg_field.textContent = '';
        field.classList.remove( 'incorrect' );

    }

}