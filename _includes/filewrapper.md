{% capture code %}
```{{ include.type }}
{% include_relative {{ include.file }} %}
```
{% endcapture %}
{{ code | markdownify }}