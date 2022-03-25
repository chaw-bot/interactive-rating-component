const submitBtn = document.getElementById('submit');
const mainContainer = document.getElementById('body');
const buttons = document.querySelectorAll('.button');
let number;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    number = button.innerHTML;
  });
});

const submitted = () => {
  const htmlText = `<section class="no-border main flex align">
                      <div>
                        <img src="images/illustration.svg" alt="rated svg" class="image" />
                        <h4 class="rating">You selected ${number} out of 5</h4>
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

submitBtn.addEventListener('click', () => {
  if (number > 0) {
    submitted();
  } else {
    mainContainer.innerHTML = '<h4 class="rating">Kindly leave a rating.</h4>';
    window.location.reload();
  }
});
