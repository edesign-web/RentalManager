//パスワードフィールドの処理
let password_field = ( () => {

    let fields = document.querySelectorAll( '.password_field' );


    //入力時
    let oninput = ( field ) => {

        let input = field.querySelector( 'input' );

        if( !input ){

            return;

        }

        input.addEventListener( 'input', ( event ) => {

            let value =  event.target.value;

            if( value ){

                input.value = value.trim(); //スペースを削除

            }
            
            if( event.target.type != 'password' ){

                event.target.type = 'password';

            }

        } );

    };

    //入力値の表示・非表示
    let toggle_input_value = ( field ) => {

        let input      = field.querySelector( 'input' );
        let toggle_btn = field.querySelector( 'button[type="button"]' );

        if( !input || !toggle_btn ){

            return;

        }

        toggle_btn.addEventListener( 'click', ( event ) => {

            if( input.type == 'password' ){

                input.type = 'text';

            }else{

                input.type = 'password';

            }

        } );

    };


    if( fields.length > 0 ){
        for( let field of fields ){
            
            oninput( field );            //入力時
            toggle_input_value( field ); //入力値の表示・非表示

        }
    }

} )();