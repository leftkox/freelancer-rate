<script lang="ts">
  import Paper, { Content, Title, Subtitle } from '@smui/paper';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import HelperText from '@smui/textfield/helper-text';
  import Icon from '@smui/textfield/icon';
	import { employeeToFreelancer } from '$lib/employee-to-freelancer-calculator';
 
  let active = 'Employee to freelancer';

  let netSalary = 0;

  let efkaClass = 0;

  let dailyRate: number | undefined = undefined;
  const calculateEmployeeToFreelancer = () => {
    dailyRate = employeeToFreelancer(netSalary ?? 0, efkaClass ?? 0);
  }
</script>

<style>
  .form-label {
    margin-bottom: 10px;
  }
</style>

<div>
  <TabBar let:tab bind:active tabs={['Employee to freelancer', 'Freelancer to employee']}>
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>

  {#if active === 'Employee to freelancer'}
    <Paper variant="unelevated">
      <div class="form-label mdc-typography--body1">Enter your net annual salary</div>
      <Textfield variant="outlined" bind:value={netSalary} label="Salary">
      </Textfield>

      <div style="margin-top: 30px;" class="form-label mdc-typography--body1">Enter your social security class (0 for "fresh" freelancer)</div>
      <Textfield variant="outlined" bind:value={efkaClass} label="EFKA Class">
      </Textfield>

      <div style="margin-top: 30px;">
      <Button on:click={() => calculateEmployeeToFreelancer()} variant="raised">
        <Label>Calculate</Label>
      </Button>

      {#if dailyRate !== undefined}
      <div style="margin-top: 20px">
        <Title>Your equivalent daily rate (in the same currency) is:</Title>
        <Subtitle>{Math.round(dailyRate)}</Subtitle>
      </div>
      {/if}
    </div>
    </Paper>

  {:else if active === 'Freelancer to employee'}
  <Paper variant="unelevated">
    <Content>Under construction!!!</Content>
  </Paper>
  {/if}
</div>