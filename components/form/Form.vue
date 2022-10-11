<script setup lang="ts">
interface Form {
  name: {
    isRequired: boolean;
    content: string;
  };
  company: {
    isRequired: boolean;
    content: string;
  };
  phone: {
    isRequired: boolean;
    content: string;
  };
  email: {
    isRequired: boolean;
    content: string;
  };
  store: {
    isRequired: boolean;
    content: string;
  };
  details: {
    isRequired: boolean;
    content: string;
  };
}

interface ErrorKey {
  [key: string]: string;
}

interface FormObject {
  [key: string]: {
    isRequired: boolean;
    content: string;
  };
}

const { $notify } = useNuxtApp();
const { t } = useI18n();
const localePath = useLocalePath();

const form = reactive<Form>({
  name: {
    isRequired: true,
    content: ''
  },
  company: {
    isRequired: true,
    content: ''
  },
  phone: {
    isRequired: false,
    content: ''
  },
  email: {
    isRequired: true,
    content: ''
  },
  store: {
    isRequired: false,
    content: ''
  },
  details: {
    isRequired: true,
    content: ''
  }
});

const errors = ref<ErrorKey>({
  name: '',
  company: '',
  phone: '',
  email: '',
  store: '',
  details: ''
});

/**
 * Send a POST request to the backend
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const pipedriveRequest = (): any => {
  return useFetch('/api/pipedrive', {
    method: 'POST',
    body: JSON.stringify(form)
  });
};

const onSubmit = async () => {
  const localErrors: ErrorKey = {};
  let errorsPresent = false;

  Object.keys(form).forEach((key) => {
    const { content, isRequired } = form[key as keyof typeof form];
    // Check if the field is required && it's empty
    if (isRequired && content === '') {
      // Not ideal, but it's needed for translations
      if (key === 'name') {
        localErrors[key] = `contact.name`;
      }
      if (key === 'company') {
        localErrors[key] = `contact.company`;
      }
      if (key === 'phone') {
        localErrors[key] = `contact.phone`;
      }
      if (key === 'email') {
        localErrors[key] = `contact.email`;
      }
      if (key === 'store') {
        localErrors[key] = `contact.store`;
      }
      if (key === 'details') {
        localErrors[key] = `contact.details`;
      }
      errorsPresent = true;
    } else {
      localErrors[key] = '';
    }
  });

  // If errors are present
  if (errorsPresent) {
    // Populate the errors object
    errors.value = localErrors;
  } else {
    // If there are no errors, submit to the server
    errors.value = localErrors;
    // Get the response from the request
    const { data } = await pipedriveRequest();
    // Show an error message if the request was not successful
    if (!data.value.success) {
      $notify({
        type: 'error',
        text: t('contact.errorMessage'),
        duration: 3000
      });
    }

    // If request was a success, clear the input fields
    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form].content = '';
    });

    await navigateTo({
      path: localePath('/contact/success'),
      query: { redirected: 'true' }
    });
  }
};

// eslint-disable-next-line consistent-return
const validateInput = (fieldName: string, formObject: FormObject) => {
  const { content, isRequired } = formObject;

  errors.value[fieldName] = '';
  if (!content && isRequired) {
    // eslint-disable-next-line default-case
    switch (fieldName) {
      case 'name':
        errors.value[fieldName] = `contact.name`;
        break;
      case 'company':
        errors.value[fieldName] = `contact.company`;
        break;
      case 'phone':
        errors.value[fieldName] = `contact.phone`;
        break;
      case 'email':
        errors.value[fieldName] = `contact.email`;
        break;
      case 'store':
        errors.value[fieldName] = `contact.store`;
        break;
      case 'details':
        errors.value[fieldName] = `contact.details`;
        break;
    }
  }
};
</script>

<template>
  <section class="flex h-full w-full max-w-[696px] flex-col py-15 px-4">
    <ClientOnly>
      <notifications
        position="top center"
        width="100%"
        classes="my-custom-class"
      />
    </ClientOnly>
    <h2
      class="pb-11 text-center text-desktop-h3-medium font-medium leading-7 md:text-desktop-h4-medium"
      v-html="$t('contact.title')"
    ></h2>
    <form class="flex w-full flex-col items-center" @submit.prevent="onSubmit">
      <div class="w-full md:flex md:gap-x-4">
        <FormBaseInput
          v-model="form.name.content"
          :label="errors.name && $t(errors.name)"
          input-type="text"
          :placeholder="$t('contact.nameLabel')"
          class="flex flex-col"
          @validate-input="validateInput('name', form.name)"
        />
        <FormBaseInput
          v-model="form.company.content"
          :label="errors.company && $t(errors.company)"
          input-type="text"
          :placeholder="$t('contact.companyLabel')"
          class="flex flex-col"
          @validate-input="validateInput('company', form.company)"
        />
      </div>
      <div class="w-full md:flex md:gap-x-4">
        <FormBaseInput
          v-model="form.phone.content"
          :label="errors.phone && $t(errors.phone)"
          input-type="number"
          :placeholder="$t('contact.phoneLabel')"
          class="flex hidden flex-col"
          @validate-input="validateInput('phone', form.phone)"
        />
        <FormBaseInput
          v-model="form.email.content"
          :label="errors.email && $t(errors.email)"
          input-type="email"
          :placeholder="$t('contact.emailLabel')"
          class="flex flex-col"
          @validate-input="validateInput('email', form.email)"
        />
      </div>
      <FormBaseInput
        v-model="form.store.content"
        :label="errors.store && $t(errors.store)"
        input-type="text"
        :placeholder="$t('contact.storeLabel')"
        class="flex hidden flex-col"
        @validate-input="validateInput('store', form.store)"
      />
      <FormBaseTextarea
        v-model="form.details.content"
        :label="errors.details && $t(errors.details)"
        :placeholder="$t('contact.detailsLabel')"
        class="flex flex-col"
        :rows="20"
        :cols="20"
        @validate-input="validateInput('details', form.details)"
      />

      <FormButton
        type="submit"
        style-type="primary"
        :text="$t('contact.btn')"
        class="mt-6"
        @submit.prevent="onSubmit"
      />
    </form>
  </section>
</template>

<style>
.my-custom-class {
  padding: 1rem;
  font-size: 1rem;
  color: #3c3c3c;
  text-align: center;

  background: #44a4fc;
  border-left: 5px solid #187fe7;
}

.notification-content {
  text-align: center;
}

.my-custom-class.success {
  background: #68cd86;
  border-left-color: #42a85f;
}

.my-custom-class.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.my-custom-class.error {
  background: #e54d42;
  border-left-color: #b82e24;
}
</style>
