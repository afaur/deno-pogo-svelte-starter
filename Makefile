.PHONY: dev serve serve-log serve-break compile compile-log compile-break test-serve test-svelte

default:
	@make serve

dev:
	@./bin/dev

serve:
	@./bin/serve

serve-log:
	@./bin/serve-log

serve-break:
	@./bin/serve-break

compile:
	@./bin/compile

compile-log:
	@./bin/compile-log

compile-break:
	@./bin/compile-break

test-serve:
	@./bin/test-serve

test-svelte:
	@./bin/test-svelte
