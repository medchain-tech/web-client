import { createSignal, createEffect, For } from 'solid-js';
import "./index.scss"

interface VerificationInputProps {
  id: string
  length?: number;
  onComplete?: (code: string) => void;
}

const VerificationCode = (props: VerificationInputProps) => {
  const [code, setCode] = createSignal<string>('');
  let inputRef: HTMLInputElement | undefined;

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/\D/g, '');
    setCode(value.slice(0, props.length || 6));
  };

  createEffect(() => {
    if (code().length === (props.length || 6)) {
      props.onComplete?.(code());
    }
  });

  return (
    <div
      class="vinput"
      data-inputid={props.id}
      onClick={() => inputRef?.focus()}
    >
      <For each={Array(props.length || 6).fill('')}>
        {(_, i) => (
          <div
            class="vinput-box"
            data-active={i() === code().length}
          >
            {code()[i()] || ''}
          </div>
        )}
      </For>
      <input
        id={props.id}
        ref={inputRef}
        type="text"
        value={code()}
        onInput={handleChange}
        maxLength={props.length || 6}
        class="sr-only"
      />
    </div>
  );
};

export default VerificationCode
