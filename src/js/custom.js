// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });
        
     });

     $('.featured-item h4').click( function(){

      $(this).css({
          'color': '#f00',
          'background': '#ff0',
          'font-weight': '100',
      });
      
    });
    $('.featured-item a').click(function(event){
       
        let titulo = $(this).attr("id"); // tag
        
       
        $('.modal h5').text(titulo);
        
      



    });

    $('featured-item:nth(1)')
        .hide(500,function(){
            console.log($(this).find('h4').text + 'esgotado')
        })
        .show(500,function(){
            console.log($(this).find('h4').text + 'em estoque')
        })

    const duracao = 1000 // equivalenta a 1 segundo

    $('.featured-item:nth(0)')
       .hide(duracao)
       .show(duracao)
       .fadeOut(duracao)
       .fadeIn(duracao)
       .toggle(duracao)
       .toggle(duracao)
 
    $('#form-submit').on('click', function(e){
 
       e.preventDefault();
 
       if( $('#email').val() != '' ){
 
          $('#email').animate({
             opacity: "toggle",
             top: "-50"
          }, 1000, function(){
             console.log($(this).val())
          })
 
       }
      
    });

    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();
  
        let elem = $(this).attr('rel')
  
        $('.modal-body').html($('#'+elem).html())
        
        $('.modal-header h5.modal-title').html($(this).text())
  
        let myModal = new bootstrap.Modal($('#modelId'))
  
        myModal.show()
  
  
     });



     function ValidaCampo(elemento){
         if (elemento.val() == '')
         {
             elemento.addClass('invalid')
             return false
         } else{
            elemento.removeClass('invalid')
         }x
     }

     $('body').on('submit','.modal-body .form',function(e){
         e.preventDefault();
         const inputName = $('#nome');
                           
        if (inputName.val() == ''){
            inputName.addClass('invalid')
            $('#helpNome').removeClass('visually-hidden')

        } else {
           inputName.removeClass('invalid')
           $('#helpNome').addClass('visually-hidden')
        }

        const inputEmail = $('#f_email');
        if (inputEmail.val() == ''){
            console.log('email vazio')
            inputEmail.addClass('invalid')
            $('#helpEmail').removeClass('visually-hidden')

        } else {
            console.log("email nao vazio")
           inputEmail.removeClass('invalid')
           $('#helpEmail').addClass('visually-hidden')
        }
        
        const inputCPF = $('#f_cpf');
                           
        if (inputCPF.val() == ''){
            inputCPF.addClass('invalid')
            $('#helpCPF').removeClass('visually-hidden')

        } else {
           inputCPF.removeClass('invalid')
           $('#helpCPF').addClass('visually-hidden')
        }
        const inputTelefone = $('#f_telefone');
                           
        if (inputTelefone.val() == ''){
            inputTelefone.addClass('invalid')
            $('#helpTelefone').removeClass('visually-hidden')

        } else {
           inputTelefone.removeClass('invalid')
           $('#helpTelefone').addClass('visually-hidden')
        }
        
           
     });
})

$('body').on('focus','#f_cpf',function(){
   
    $(this).mask('000.000.000-00',{placeholder: "___.___.___.-__"});
    
})
  $('body').on('blur','#f_cpf',function(){
    console.log("chamada teste cpf");
   if ( TestaCPF($(this).cleanVal())==false)
      {
        console.log('testaCPF retornou false')  
        $(this).addClass('invalid')
        $('#helpCPF').removeClass('visually-hidden')
        
      } else {
        console.log('testaCPF retornou true') 
         $(this).removeClass('invalid')
         $('#helpCPF').addClass('visually-hidden')
      }
  })  


  /* Função para verificar a validade do CPF*/
function TestaCPF(strCPF) {
    let Soma;
    var Resto;
     console.log(strCPF);
     Soma = 0;
     multiplicador=10;
     if (strCPF == "00000000000") return false;
     for(i=0;i<9;i++) { 
         console.log(Soma = Soma + strCPF[i] * multiplicador);
        multiplicador=multiplicador - 1;
     }
     Resto = (Soma * 10)%11;
     console.log(Resto);
     if (Resto==10 || Resto == 11) Resto ==0;
     if( Resto != strCPF[9]){

        return false;
     } 
     Soma= 0;
     multiplicador=11;
     for(i=0;i<=9;i++) { 
        console.log(Soma = Soma + strCPF[i] * multiplicador);
       multiplicador=multiplicador - 1;
    }
    Resto=(Soma*10)%11
    console.log(Resto);
    if (Resto==10 || Resto == 11) Resto ==0;
    if( Resto != strCPF[10]){

       return false;
    } 
}

$('body').on('focus','#f_telefone',function(){
    $(this).mask('(00) 00000-0000')
})

$('body').on('blur','#f_telefone',function(){
    var telefone = $(this).cleanVal()
    console.log('chamada blur telefone ')
    console.log(telefone)
    console.log(telefone.length)
    console.log($(this).cleanVal().length)
    if ($(this).cleanVal().length !=11)
    {
        $(this).addClass('invalid')
        $('#helpTelefone').removeClass('visually-hidden')
        
    }
    else{   
        $(this).removeClass('invalid')
        $('#helpTelefone').addClass('visually-hidden')

    }
 
})

$('body').on('blur','#nome',function(){
    console.log('chamada blur nome')
    if($(this).val()<2 )
    {
        console.log('nome fora padrao ')
        $(this).addClass('invalid')
        $('#helpNome').removeClass('visually-hidden')

    } else {
        console.log('nome  padrao ')
       $(this).removeClass('invalid')
       $('#helpNome').addClass('visually-hidden')
    }
})

function ValidaEmail(strEmail)
{
       
    posicao = strEmail.indexOf('@');
    usuario = strEmail.substring(0,posicao);
    dominio = strEmail.substring(posicao+1,strEmail.length)
    if( (usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1))
    {
       
       return true;
    } 
    else 
    {
       return false;
    }
}

$('body').on('blur', '#f_email',function(){
   if (ValidaEmail($(this).val()))
    {
        $(this).removeClass('invalid')
        $('#helpEmail').addClass('visually-hidden')

    }
    else
    {
        $(this).addClass('invalid')
        $('#helpEmail').removeClass('visually-hidden')
    }
})