import { onMounted, type Ref, watch, onBeforeUnmount } from 'vue';

export function useModalFunctions(isOpen: Ref<boolean>, close: () => void) {
  const onKeyHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  onMounted(() => {
    document.body.addEventListener('keydown', onKeyHandler);
  });

  onBeforeUnmount(() => {
    document.body.removeEventListener('keydown', onKeyHandler);
    document.body.classList.remove('no-scroll');
    close()
  });

  watch(isOpen, (val) => {
    if (val) { document.body.classList.add('no-scroll'); }
    else {
      document.body.classList.remove('no-scroll');
    }
  });

}
