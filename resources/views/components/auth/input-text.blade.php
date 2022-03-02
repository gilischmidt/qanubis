@php($id = $id ?? uniqid())
@php($required = $required ?? false)
@php($value = $value ?? null)
@php($autofocus = $autofocus ?? false)
@php($readonly = $readonly ?? false)
@php($autocomplete = $autocomplete ?? false)

<div class="form-group">
    <label for="{{ $id }}">{{ $label }}</label>
    <input id="{{ $id }}" type="text"
           class="form-control
           @error($name) is-invalid @enderror"
           name="{{ $name }}"
           value="{{ $value }}"
           @if($required) required @endif
           @if($readonly) readonly="{{$readonly}}" @endif
           @if($autocomplete) autocomplete="{{$autocomplete}}" @endif
           @if($autofocus) autofocus @endif>

    @error($name)
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
     </span>
    @enderror
</div>
