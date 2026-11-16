<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();

const name = ref('');
const email = ref('');
const requestType = ref('job');
const message = ref('');
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle');

const mailtoFallback = computed(() => {
  const to = config.public.contactEmail || 'hello@example.com';
  const subject = encodeURIComponent(`Zumbii — ${requestType.value}`);
  const body = encodeURIComponent(
    `${message.value}\n\n— ${name.value} (${email.value})`,
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
});

const submitForm = async () => {
  status.value = 'sending';
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        requestType: requestType.value,
        message: message.value,
      },
    });
    status.value = 'success';
    name.value = '';
    email.value = '';
    message.value = '';
  } catch {
    status.value = 'error';
  }
};
</script>

<template>
  <form class="formContact" @submit.prevent="submitForm">
    <label class="formContact__field">
      <span>{{ t('contact.form.name') }}</span>
      <input v-model="name" type="text" name="name" required autocomplete="name" />
    </label>
    <label class="formContact__field">
      <span>{{ t('contact.form.email') }}</span>
      <input v-model="email" type="email" name="email" required autocomplete="email" />
    </label>
    <label class="formContact__field">
      <span>{{ t('contact.form.type') }}</span>
      <select v-model="requestType" name="type">
        <option value="job">{{ t('contact.form.types.job') }}</option>
        <option value="quiz">{{ t('contact.form.types.quiz') }}</option>
        <option value="other">{{ t('contact.form.types.other') }}</option>
      </select>
    </label>
    <label class="formContact__field">
      <span>{{ t('contact.form.message') }}</span>
      <textarea v-model="message" name="message" rows="5" required />
    </label>
    <BaseButton type="submit" :disabled="status === 'sending'">
      {{ status === 'sending' ? $t('common.sending') : $t('common.submit') }}
    </BaseButton>
    <p v-if="status === 'success'" class="formContact__status formContact__status--ok">
      {{ $t('common.sendSuccess') }}
    </p>
    <p v-else-if="status === 'error'" class="formContact__status formContact__status--err">
      {{ $t('common.sendError') }}
      <a :href="mailtoFallback">{{ $t('contact.mailtoHint') }}</a>
    </p>
  </form>
</template>

<style lang="scss" scoped>
.formContact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32rem;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.9rem;

    span {
      color: $colorTextMuted;
    }

    input,
    select,
    textarea {
      padding: 0.65rem 0.75rem;
      border-radius: 6px;
      border: 1px solid $colorBorderGoldDim;
      background: #0d1219;
      color: $colorText;
      font: inherit;
    }
  }

  &__status {
    margin: 0;
    font-size: 0.9rem;

    &--ok {
      color: $colorAccentTeal;
    }

    &--err {
      color: $colorDanger;
    }
  }
}
</style>