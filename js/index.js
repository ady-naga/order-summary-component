const changePlanBtn = document.getElementById('btn-change-plan');
const planType = document.querySelector('.plan-type');
const planPrice = document.querySelector('.plan-price');

changePlanBtn.addEventListener('click', () => {
	if (planType.textContent === 'Annual Plan') {
		planType.textContent = 'Monthly Plan';
		planPrice.textContent = '$9.99';
	} else {
		planType.textContent = 'Annual Plan';
		planPrice.textContent = '$59.99';
	}
});