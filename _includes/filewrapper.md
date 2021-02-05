{% capture code %}
{% if include.type == 'equations' %}
<div class="highlighter-rouge" style="font-size: .75em">
{% include_relative {{ include.file }} %}
</div>
{% else %}
```{{ include.type }}
{% include_relative {{ include.file }} %}
```
{% endif %}
{% endcapture %}
{{ code | markdownify }}