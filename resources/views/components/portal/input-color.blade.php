@php($id = $id ?? uniqid())
@php($required = $required ?? false)
@php($value = $value ?? null)

<div class="form-group">
    <label for="{{ $id }}">{{ $label }}@if($required)<span class="font-weight-bolder text-danger"
                                                           style="word-spacing: 0">*</span> @endif</label>
    <input id="{{ $id }}"
           class="form-control
           @error($name) is-invalid @enderror"
           name="{{ $name }}"
           value="{{ $value }}"
           @if($required) required @endif>

    @error($name)
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
     </span>
    @enderror
</div>
