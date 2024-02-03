<script lang="ts">
	import Button from "@smui/button";
	import { Title, Subtitle } from "@smui/paper";
	import { Label } from "@smui/tab";
	import Textfield from "@smui/textfield";
	import { employeeToFreelancer, EFKA_CLASS_AMOUNTS } from '$lib/employee-to-freelancer-calculator';

  import Select, { Option } from '@smui/select';
 

  let netSalary = 0;

  let efkaClass = 0;
  let fromCurrency: 'EUR' | 'GBP' = 'EUR';
  let toCurrency: 'EUR' | 'GBP' = 'GBP';
  const CURRENCIES = ['EUR', 'GBP'];
  let dailyRate: number | undefined = undefined;

  const currencySymbols = {
    EUR: '€',
    GBP: '£'
  }

  $: dailyRate = employeeToFreelancer(netSalary ?? 0, efkaClass ?? 0, fromCurrency, toCurrency);
</script>


<div>

  <div class="form-label mdc-typography--body1" style="margin-top: 30px;">1. Enter your net annual salary</div>
  <div class="currency-amount-row">
  <Textfield variant="outlined" bind:value={netSalary} label="Salary"></Textfield>
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
    3. Enter the currency you will be receiving payments in as a freelancer
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
        An amount of {currencySymbols[fromCurrency]}{netSalary} annually net is equivalent to a daily rate of  {currencySymbols[toCurrency]}{Math.round(dailyRate)}.
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