@php($id = $id ?? uniqid())
@php($value = $value ?? null)
@php($type = $type ?? 'basic')

<div class="form-group">
    <label for="{{ $id }}">{{ $label }}</label>
    <div id="{{ $id }}" class="border-0 input-quill-{{ $type }}">{!! $value !!}</div>
    <small>Add new lines by pressing 'Enter'</small>
</div>
