<p class="doc-kicker">Automation</p>

# Scheduled jobs

Scheduled jobs run an agent with a saved instruction at a recurring time. Use them for monitoring, summaries, inbox processing, recurring research, or maintenance tasks.

![The scheduled jobs list](../img/schedule.png)

## Create a scheduled job

1. Open **Schedule** and select **Add Cron Job**.
2. Give the job a recognizable name and select an agent.
3. Choose **Every X min**, **Hourly**, **Daily**, **Weekly**, **Monthly**, or **Custom**.
4. Enter the instruction the agent should perform on every run.
5. Optionally choose a notification channel and notification condition.
6. Enable the job and save it.

The schedule summary shows the interpreted timing. Review it before enabling a job, especially when using a custom cron expression.

## One-off jobs

Enable **Disable after first successful run** when a job should stop after completing once. This is useful for a future reminder or a delayed task while keeping the same schedule machinery.

## Manage jobs

From the job list you can run a job immediately, edit it, duplicate it, delete it, or toggle it on and off. Status shows whether it is scheduled, paused, or currently executing.

## Design for unattended execution

- Write an instruction that does not depend on missing chat context.
- Choose an agent with only the required tools and credentials.
- Specify where results should go and when a notification should be sent.
- Decide how the agent should handle empty results and transient failures.
- Run the job manually once before enabling the schedule.

::: tip Time zone
Schedules follow the environment in which Cynosure runs. Check the displayed schedule after daylight-saving or system time-zone changes.
:::
