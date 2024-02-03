<script lang="ts">
	import { EFKA_CLASS_AMOUNTS, freelancerToEmployee } from '$lib/calculators';
	import Textfield from "@smui/textfield";

  import Select, { Option } from '@smui/select';
 

  let dailyRate = 0;

  let efkaClass = 0;
  let fromCurrency: 'EUR' | 'GBP' = 'GBP';
  let toCurrency: 'EUR' | 'GBP' = 'EUR';
  const CURRENCIES = ['EUR', 'GBP'];
  let netSalary: number | undefined = undefined;

  const currencySymbols = {
    EUR: '€',
    GBP: '£'
  }

  $: netSalary = freelancerToEmployee(dailyRate ?? 0, efkaClass ?? 0, fromCurrency, toCurrency);
</script>


<div>

  <div class="form-label mdc-typography--body1" style="margin-top: 30px;">1. Enter your daily rate as a freelancer</div>
  <div class="currency-amount-row">
  <Textfield variant="outlined" bind:value={dailyRate} label="Rate"></Textfield>
  <div>
    <Select bind:value={fromCurrency} label="Select currency">
      {#each CURRENCIES as currency}
        <Option value={currency}>{currency}</Option>
      {/each}
    </Select>
  </div>
</div>
  <div style="margin-top: 50px;" class="form-label mdc-typography--body1">
    2. Enter your social security class (0 for "new" freelancer - up to 5 years since first company formation)
  </div>
  <div>
    <Select bind:value={efkaClass}>
      {#each Array(EFKA_CLASS_AMOUNTS.length).fill(0).map((_, i) => i) as item}
        <Option value={item}>{item + ` (€${EFKA_CLASS_AMOUNTS[item]})/month`}</Option>
      {/each}
    </Select>
  </div>

  <div style="margin-top: 50px;" class="form-label mdc-typography--body1">
    3. Enter the currency you will be receiving payments in as an employee
  </div>
  <div>
    <Select bind:value={toCurrency}>
      {#each CURRENCIES as item}
        <Option value={item}>{item}</Option>
      {/each}
    </Select>
  </div>

  <div style="margin-top: 30px;">

    {#if dailyRate !== undefined}
      <div class="mdc-typography--body1" style="margin-top: 20px">
        A daily rate of {currencySymbols[fromCurrency]}{dailyRate} gross is equivalent to a net annual salary of {currencySymbols[toCurrency]}{Math.round(netSalary ?? 0)}.
      </div>
    {/if}
  </div>
</div>

<style>
  .form-label {
		margin-bottom: 10px;
	}

  .currency-amount-row {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
</style>