<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Тема</th>
                  <th>Последнее сообщение</th>
                  <th>Автор</th>
                  <th>Дата</th>
                </tr>
              </thead>
              @foreach($title->topics as $topic)
              <tbody>
                <tr>
                  <td><a href="/posts/{{ $topic->id }}">{{ $topic->title }}</a></td>
                  <td>{!! $topic->body !!}</td>
                  <td>{{ $topic->user->name }}</td>
                  <td>{{ $topic->created_at->toFormattedDateString() }}</td>
                </tr>
              </tbody>
              @endforeach
            </table>
          </div>