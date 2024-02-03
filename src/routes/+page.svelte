<script lang="ts">
	import Paper, { Content } from '@smui/paper';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import EmployeeToFreelancer from '$components/employee-to-freelancer.svelte';
	import FreelancerToEmployee from '$components/freelancer-to-employee.svelte';

	let active = 'Employee to freelancer';

</script>

<div class="container">
<Paper >
	<TabBar let:tab bind:active tabs={['Employee to freelancer', 'Freelancer to employee']}>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>

	{#if active === 'Employee to freelancer'}
		<EmployeeToFreelancer />
	{:else if active === 'Freelancer to employee'}
		<div >
			<FreelancerToEmployee />
		</div>
	{/if}
	</Paper>
</div>

<style>
	.container {
		width: 60%;
		margin: auto;
		min-width: 300px;
		max-width: 550px;
		padding-top: 50px;
	}
</style>
