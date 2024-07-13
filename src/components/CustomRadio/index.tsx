import { For, createSignal } from 'solid-js';
import "./index.scss";

interface Option {
  title: string;
  description?: string;
  value: string;
}

export interface CustomRadioProps {
  options: Option[];
  onSelect?: (selectedOption: Option, index: number) => void;
  labelId: string;
  name: string;
}

const CustomRadio = (props: CustomRadioProps) => {
  const [selectedIndex, setSelectedIndex] = createSignal(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    props.onSelect?.(props.options[index], index);
  };

  return (
    <div
      aria-labelledby={props.labelId}
      role="radiogroup"
      class="custom-radio-list"
    >
      <For each={props.options}>
        {(option, index) => (
          <label class="custom-radio-option">
            <input
              class="custom-radio-input"
              required={true}
              type="radio"
              name={props.name}
              value={option.value}
              checked={index() === selectedIndex()}
              onInput={() => handleSelect(index())}
            />
            <span class="custom-radio-content" data-selected={index() === selectedIndex()}>
              <strong class="custom-radio-title">{option.title}</strong>
              {option.description && (
                <span class="custom-radio-description">{option.description}</span>
              )}
            </span>
          </label>
        )}
      </For>
    </div>
  );
};

export default CustomRadio;
