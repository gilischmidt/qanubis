@php($id = $id ?? uniqid())
@php($required = $required ?? false)
@php($value = $value ?? null)

<div class="form-group">
    <label>{{ $label }}</label>

    <div>
        @foreach($options as $option)
            @php($id = uniqid())
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="{{ $name }}" id="{{ $id }}"
                       value="{{ $option['value'] }}" @if($value === $option['value']) checked @endif>
                <label class="form-check-label" for="{{ $id }}">{{ $option['label'] }}</label>
            </div>
        @endforeach
    </div>
    @error($name)
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
     </span>
    @enderror
</div>
