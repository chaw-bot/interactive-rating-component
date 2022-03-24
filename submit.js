// const body = document.getElementById('body');
// const submitBtn = document.getElementsById('submit');
// const one = document.getElementsById('one');
// const two = document.getElementsById('two');
// const three = document.getElementsById('three');
// const four = document.getElementsById('four');
// const five = document.getElementsById('five');

const submitted = () => {
  const htmlText = `<section class="no-border main flex align">
                    <div>
                        <img src="images/illustration.svg" alt="rated svg" class="image" />
                        <p class="rating">You selected ${} out of 5</p>
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

  return htmlText;
};

submitted();
