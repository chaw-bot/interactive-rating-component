const submitBtn = document.getElementById('submit');
const mainContainer = document.getElementById('body');
const buttons = document.querySelectorAll('.button');
let number = 0;

buttons.forEach((button) => {
   button.addEventListener('click', () => {
    number = button.innerHTML;
     console.log(number);
   })
});

const submitted = () => {
  const htmlText = `<section class="no-border main flex align">
                    <div>
                        <img src="images/illustration.svg" alt="rated svg" class="image" />
                        <p class="rating">You selected ${number} out of 5</p>
                    </div>
                    <section class="text text-box">
                        <h2 class="white">Thank you!</h2>
                        <p>
                        We appreciate you taking the time to give a rating.
                        If you ever need more support, don't hesitate to
                        get in touch!
                        </p>
                    </section>
                    </section>`;

  mainContainer.innerHTML = htmlText;
};

submitBtn.addEventListener('click', submitted);
