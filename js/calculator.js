$(document).ready(function(){

    function digits_int(target){
        var str = target+'';
        var a = str.split('.')[0];
        var b = str.split('.')[1];

        val = a.replace(/[^0-9]/g, '');
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        if (b != undefined) {
            return val + '.' + b;
        } else {
            return val;
        }
        
    }

    $(function($){
        $('body').on('input', 'input', function(e){
            $(this).val(digits_int($(this).val()));
        });
    });
  
    $(document).on('click', '#calculator-submit', function(e){
      e.preventDefault();
      var car_price = Number($('#total-amount').val().replace(/[^+\d]/g, ''));
      var down_payment = Number($('#down-payment').val().replace(/[^+\d]/g, ''));
      var interval_text = $('#interval').val().replace(/[^+\d]/g, '');
      var interval = interval_text.replace(/[^+\d]/g, '');
      var interest_rate = Number($('#interest-rate').val().replace(/[^+\d]/g, ''));
      var sales_tax = Number($('#sales-tax').val().replace(/[^+\d]/g, ''));

      var errors = 0;

      $(".input").each( function( i ) {
        if($(this).val() == '' || $(this).val() == 'no') {
            errors++;
        }
      });

      if(errors == 0) {
        $('#error').css('display','none');

        $('#car-price').text(digits_int(car_price));
        $('#down-payment2').text(digits_int(down_payment));

        var estimated_sales_tax = (sales_tax * car_price) / 100;
        $('#estimated-sales-tax').text(digits_int(estimated_sales_tax));

        var total_loan_amount = car_price - down_payment + estimated_sales_tax;
        $('#total-loan-amount').text(digits_int(total_loan_amount));
        
        var rate = (interest_rate / 12) / 100;
        var x = Math.pow(1 + rate, interval);

        var monthly_payment = (total_loan_amount * rate * x) / (x - 1);
        $('#monthly-payment').text(digits_int(Math.ceil(monthly_payment)));
        $('#monthly-payment-title').text(digits_int(Math.ceil(monthly_payment)));
        
        var total_interest_paid = (monthly_payment * interval) - total_loan_amount;
        $('#total-interest-paid').text(digits_int(total_interest_paid.toFixed(2)));

        var total_loan_and_interest_paid = total_loan_amount + Number(total_interest_paid.toFixed(2));
        $('#total-loan-and-interest-paid').text(digits_int(total_loan_and_interest_paid.toFixed(2)));

      } else {
        $('#error').css('display','block');
      }
    });

});