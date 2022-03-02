@php($id = $id ?? uniqid())
@php($required = $required ?? false)
@php($value = $value ?? null)
@php($accept = $accept ?? false)

<div class="form-group">
    <label for="{{ $id }}">{{ $label }}</label>
    <input id="{{ $id }}" type="file"
           class="form-control
           @error($name) is-invalid @enderror"
           name="{{ $name }}"
           value="{{ $value }}"
           @if($required) required @endif
           @if($accept) accept="{{ $accept }}" @endif>

    @error($name)
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
     </span>
    @enderror
</div>
